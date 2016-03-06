package com.slotbooking.services;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.slotbooking.model.BookingOrder;
import com.slotbooking.model.BookingOrderResponse;
import com.slotbooking.model.BoxAvailibility;
import com.slotbooking.model.Item;
import com.slotbooking.model.VanAvaibility;
import com.slotbooking.mongodb.dao.BookingOrderDAO;
import com.slotbooking.mongodb.dao.BookingOrderDAOImpl;

public class SlotBookingServiceImpl implements SlotBookingService
{
	BookingOrderDAO dao;
	public SlotBookingServiceImpl() 
	{
		dao = new BookingOrderDAOImpl();
	}

	public List<BookingOrderResponse> getAllOrders()
	{
		List<BookingOrderResponse> allOrders = dao.readAll();
		System.out.println(allOrders);
		return allOrders;
	}
	private BoxAvailibility setBoxSpaceAvailable(BoxAvailibility box,List<Item> items)
	{
		double boxVol = 6750.0;
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
	
	private VanAvaibility setVanSpaceAvailable(VanAvaibility van)
	{
		double vanVol = 135000.0;
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
	
	public boolean placeNewOrder(BookingOrder bookingOrder)
	{
		List<BookingOrderResponse> oldOrders = dao.readByBookingSlot(bookingOrder.getBookingSlot());
		Map<String,VanAvaibility> vanBoxAvaibilityMap = getVanBoxAvaibilityMap(oldOrders);
		
		if(!checkSlotAvailable(vanBoxAvaibilityMap,oldOrders))
		{
			return false;
		}
		dao.saveBookingOrder(bookingOrder);
		return true;
	}
}
