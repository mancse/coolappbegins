package com.slotbooking.mongodb.dao;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;

import com.mongodb.BasicDBList;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.slotbooking.model.BookingOrder;
import com.slotbooking.model.BookingOrderResponse;
import com.slotbooking.model.Item;
import com.slotbooking.model.SlotAvaibility;
import com.slotbooking.model.TimeSlot;

public class BookingOrderDAOImpl implements BookingOrderDAO{

	MongoClient mongo;
	DB db;
	DBCollection orderColl;	
	static BookingOrderDAOImpl instance = null;
	
	private BookingOrderDAOImpl()
	{
		mongo = new MongoClient("localhost", 27017);
		db = mongo.getDB("bookingOrder");
		System.out.println("Connect to database successfully");
		orderColl = db.getCollection("booking");
	    System.out.println("Collection order selected successfully");
	}
	
	public static BookingOrderDAOImpl getInstance()
	{
		if (instance == null)
		{
			instance = new BookingOrderDAOImpl();
		}
		return instance;
	}
	/**
	 * This method is meant for saving the booking order in MongoDB database
	 */
	public void saveBookingOrder(BookingOrder bookingOrder) {
		try
		{
			List<BasicDBObject> itemDocsList = new ArrayList<BasicDBObject>();
			for (Item item : bookingOrder.getItems())
			{
				BasicDBObject itemDoc = new BasicDBObject("category", item.getCategory()).
			             append("height", item.getHeight()).
			             append("width", item.getWidth()).
			             append("breadth", item.getBreadth()).
			             append("details", item.getDetails());
				itemDocsList.add(itemDoc);
			}
			
			TimeSlot timeSlot = bookingOrder.getBookingSlot();
			BasicDBObject timeSlotDoc = new BasicDBObject("year",timeSlot.getYear()).
					append("month",timeSlot.getMonth()).
					append("day", timeSlot.getDay()).
					append("hour", timeSlot.getHour()).
					append("minute", timeSlot.getMinute()).
					append("second",timeSlot.getSecond());
						
			BasicDBObject bookingOrderDoc = new BasicDBObject("items", itemDocsList).
					append("vanNumber", bookingOrder.getVanNumber()).
					append("cartonNumber", bookingOrder.getCartonNumber()).
					append("bookingSlot", timeSlotDoc).append("timeSlotStr", getTimeSlotInString(timeSlot));
			
			orderColl.insert(bookingOrderDoc);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	private String getTimeSlotInString(TimeSlot timeSlot)
	{
		StringBuilder timeSlotString = new StringBuilder();
		timeSlotString.append(timeSlot.getYear()).append(timeSlot.getMonth()).append(timeSlot.getDay()).
					   append(timeSlot.getHour()).append(timeSlot.getMinute()).append(timeSlot.getSecond());
		return timeSlotString.toString();
	}
	
	/**
	 * Method returns all the items and their attributes of any order.
	 * There can be multiple items inside an order hence list of items 
	 * are returned.
	 * @param dbObject
	 * @return list of items.
	 */
	private List<Item> getOrderItems(DBObject dbObject)
	{
		List<Item> items = new ArrayList<Item>();
		BasicDBList itemsList = (BasicDBList) dbObject.get("items");
		for (int i=0;i<itemsList.size();i++)
		{
			BasicDBObject itemObj = (BasicDBObject) itemsList.get(i);
			Item item = new Item();
			item.setCategory(itemObj.getString("category"));
			item.setHeight(itemObj.getDouble("height"));
			item.setWidth(itemObj.getDouble("width"));
			item.setBreadth(itemObj.getDouble("breadth"));
			item.setDetails(itemObj.getString("details"));
			items.add(item);
		}
		return items;
	}
	
	/**
	 * Encapsulates date and time of booking into TimeSlot object
	 * @param dbObject
	 * @return
	 */
	private TimeSlot getOrderTimeSlot(DBObject dbObject)
	{
		TimeSlot timeSlot = new TimeSlot();
		BasicDBObject timeSlotObject = (BasicDBObject)dbObject.get("bookingSlot");
		timeSlot.setYear(timeSlotObject.getInt("year"));
		timeSlot.setMonth(timeSlotObject.getInt("month"));
		timeSlot.setDay(timeSlotObject.getInt("day"));
		timeSlot.setHour(timeSlotObject.getInt("minute"));
		timeSlot.setMinute(timeSlotObject.getInt("second"));
		return timeSlot;
	}
	
	/**
	 * This method is meant for retrieving all the booking orders. 
	 */
	public List<BookingOrderResponse> readAll()
	{
		List<BookingOrderResponse> allBookings = new ArrayList<BookingOrderResponse>();
		DBCursor dbCursor = orderColl.find();
		while(dbCursor.hasNext())
		{  
			DBObject dbObject = dbCursor.next();
			System.out.println(dbObject);
			ObjectId id = (ObjectId)dbObject.get("_id");	
			BookingOrderResponse bookingOrderResponse = new BookingOrderResponse();
			bookingOrderResponse.setOrderId(id.toString());
			BookingOrder bookingOrder = new BookingOrder();
			bookingOrder.setItems(getOrderItems(dbObject));
			bookingOrder.setVanNumber((String)dbObject.get("vanNumber"));
			bookingOrder.setCartonNumber((String)dbObject.get("cartonNumber"));
			bookingOrder.setBookingSlot(getOrderTimeSlot(dbObject));
			bookingOrderResponse.setBookingOrder(bookingOrder);
			allBookings.add(bookingOrderResponse);
		}
		
		return allBookings;
	}
	
	int TWOHOURSINSECONDS = 7200;
	/**
	 * Returns all the booking orders between current booking time and 2 hours past from it.
	 */
	public List<BookingOrderResponse> readByBookingSlot(TimeSlot currentOrderTimeSlot)
	{
		List<BookingOrderResponse> allBookings = new ArrayList<BookingOrderResponse>();
		DBCursor dbCursor = orderColl.find();
		while(dbCursor.hasNext())
		{
			DBObject dbObject = dbCursor.next();
			TimeSlot timeSlot = getOrderTimeSlot(dbObject);
			
			if (timeSlot.getYear() == currentOrderTimeSlot.getYear()
					&& timeSlot.getMonth() == currentOrderTimeSlot.getMonth()
					&& timeSlot.getDay() == currentOrderTimeSlot.getDay())
			{
				int diffHour = currentOrderTimeSlot.getHour() - timeSlot.getHour();
				int diffMin = currentOrderTimeSlot.getMinute() - timeSlot.getMinute();
				int diffSec = currentOrderTimeSlot.getSecond() - timeSlot.getSecond();
				int totalTimeDiff = diffHour + diffMin + diffSec;
				
				if (totalTimeDiff <= TWOHOURSINSECONDS)
				{
					ObjectId id = (ObjectId)dbObject.get("_id");	
					BookingOrderResponse bookingOrderResponse = new BookingOrderResponse();
					bookingOrderResponse.setOrderId(id.toString());
					BookingOrder bookingOrder = new BookingOrder();
					bookingOrder.setItems(getOrderItems(dbObject));
					bookingOrder.setVanNumber((String) dbObject.get("vanNumber"));
					bookingOrder.setCartonNumber((String)dbObject.get("cartonNumber"));
					bookingOrder.setBookingSlot(getOrderTimeSlot(dbObject));
					bookingOrderResponse.setBookingOrder(bookingOrder);
					allBookings.add(bookingOrderResponse);
				}
			}
		}
		return allBookings;
	}
}
