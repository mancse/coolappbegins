package com.slotbooking.services;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.mongodb.DBCollection;
import com.slotbooking.model.BookingOrder;
import com.slotbooking.model.BookingOrderResponse;
import com.slotbooking.model.BoxAvailibility;
import com.slotbooking.model.Item;
import com.slotbooking.model.VanAvaibility;
import com.slotbooking.mongodb.dao.BookingOrderDAO;
import com.slotbooking.mongodb.dao.BookingOrderDAOImpl;

/**
 * This class is meant for implementing functionalities for slot booking
 * @author m121kuma
 */
public class SlotBookingServiceImpl implements SlotBookingService
{
	
	public SlotBookingServiceImpl(){
	}

	public List<BookingOrderResponse> getAllOrders()
	{
		BookingOrderDAO dao = BookingOrderDAOImpl.getInstance();
		DBCollection orderColl = dao.getBookingCollection();
		List<BookingOrderResponse> allOrders = dao.readAll(orderColl);
		System.out.println(allOrders);
		return allOrders;
	}
	
	/**
	 * This method is to calculate the percentage of space available in the selected 
	 * carton number so that booking decision can be taken if space is available. 
	 * @param box
	 * @param items
	 * @return BoxAvailibility
	 */
	private BoxAvailibility setBoxSpaceAvailable(BoxAvailibility box,List<Item> items)
	{
		double boxVol = 6750.0;//Maximum volume of a carton
		double usedVol = 0.0;
		for (Item item: items)
		{
			usedVol = usedVol + (item.getHeight() * item.getWidth() * item.getBreadth());
		}
		box.setBoxUsedSpace(usedVol);
		double freeVol = boxVol - usedVol;
		double freePrecentage = (freeVol/boxVol)*100;
		box.setBoxSpaceAvailable(freePrecentage);
		return box;
	}
	
	/**
	 * This method is to calculate the percentage of space available in the selected 
	 * van number so that booking decision can be taken if space is available. 
	 * @param box
	 * @param items
	 * @return BoxAvailibility
	 */
	private VanAvaibility setVanSpaceAvailable(VanAvaibility van)
	{
		double vanVol = 135000.0; //Maximum volume of a van
		double usedVol = 0.0;
		Set<BoxAvailibility> boxes = van.getBoxesAvailibility();
		for (BoxAvailibility  box: boxes)
		{
			usedVol = usedVol + box.getBoxUsedSpace();
		}
		van.setVanUsedSpace(usedVol);
		double freeVol = vanVol - usedVol;
		double freePrecentage = (freeVol/vanVol)*100;
		van.setVanSpaceAvailable(freePrecentage);
		return van;
	}
	
	/**
	 * This method looks up database and finds out which all are the orders lying in the given time slot
	 * of window 2 hours and calculates the van availability and box availability inside each van and returns
	 * map of van number and VanAvaibility object. Each VanAvaibility object internally contains set of BoxAvaibility
	 * object. Each BoxAvaibility object contains box number and percentage of available box space.
	 * @param oldOrders
	 * @return
	 */
	private Map<String,VanAvaibility> getVanBoxAvaibilityMap(List<BookingOrderResponse>  oldOrders)
	{
		Map<String,VanAvaibility> vanBoxAvaibilityMap = new HashMap<String,VanAvaibility>();
		for (BookingOrderResponse orderResp : oldOrders)
		{
			Set<BoxAvailibility> boxesSet;
			BookingOrder order = orderResp.getBookingOrder();
			String vanNum = order.getVanNumber();
			VanAvaibility vanAvaibility = vanBoxAvaibilityMap.get(vanNum);
			if (vanAvaibility == null)
			{
				vanAvaibility = new VanAvaibility();
				boxesSet = new HashSet<BoxAvailibility>();
				BoxAvailibility box = new BoxAvailibility();
				box.setBoxNumber(order.getCartonNumber());
				box = setBoxSpaceAvailable(box,order.getItems());
				boxesSet.add(box);
				vanAvaibility.setVanNumber(vanNum);
				vanAvaibility.setBoxesAvailibility(boxesSet);
				vanBoxAvaibilityMap.put(vanNum, vanAvaibility);
			}
			else
			{
				boxesSet = vanAvaibility.getBoxesAvailibility();
				for (BoxAvailibility box : boxesSet)
				{
					if (!(box.getBoxNumber().equalsIgnoreCase(order.getCartonNumber())))
					{
						box = new BoxAvailibility();
						box.setBoxNumber(order.getCartonNumber());
					}
					box= setBoxSpaceAvailable(box,order.getItems());
				}
			}
			if (vanAvaibility != null)
			{
				vanAvaibility = setVanSpaceAvailable(vanAvaibility);
			}
		}
		return vanBoxAvaibilityMap;
	}
	
	/**
	 * This  method is meant to calculate if the input slot is available or not on the basis of VanAvaibility.
	 * @param vanBoxAvaibilityMap
	 * @param oldOrders
	 * @return Returns true if the input slot is available or else returns false.
	 */
	private boolean checkSlotAvailable(Map<String,VanAvaibility> vanBoxAvaibilityMap, List<BookingOrderResponse>  oldOrders)
	{
		boolean slotAvailable = true;
		double totalSlotVol = 540000.0;
		double usedSlotVol =0.0;
		for (BookingOrderResponse bookingOrderResp:  oldOrders)
		{
			BookingOrder bookingOrder = bookingOrderResp.getBookingOrder();
			VanAvaibility van = vanBoxAvaibilityMap.get(bookingOrder.getVanNumber());
			usedSlotVol = usedSlotVol + van.getVanUsedSpace();
		}
		double freeSlotVol = totalSlotVol - usedSlotVol;
		double freeSlotVolPercent = (freeSlotVol/totalSlotVol) * 100;
		
		if (freeSlotVolPercent <=0)
		{
			slotAvailable = false;
		}
		return slotAvailable;
	}
	
	/**
	 * This method is meant for placing the new order with time slot for the order.
	 * @param BookingOrder
	 * @return Returns true if order is placed successfully or else returns false. 
	 */
	public boolean placeNewOrder(BookingOrder bookingOrder)
	{
		BookingOrderDAO dao = BookingOrderDAOImpl.getInstance();
		DBCollection orderColl = dao.getBookingCollection();
		List<BookingOrderResponse> oldOrders = dao.readByBookingSlot(orderColl,bookingOrder.getBookingSlot());
		Map<String,VanAvaibility> vanBoxAvaibilityMap = getVanBoxAvaibilityMap(oldOrders);
		
		if(!checkSlotAvailable(vanBoxAvaibilityMap,oldOrders))
		{
			return false;
		}
		dao.saveBookingOrder(orderColl,bookingOrder);
		return true;
	}
}
