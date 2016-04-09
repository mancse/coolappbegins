package com.slotbooking.mongodb.dao;

import java.util.List;

import com.mongodb.DBCollection;
import com.slotbooking.model.BookingOrder;
import com.slotbooking.model.BookingOrderResponse;
import com.slotbooking.model.Item;
import com.slotbooking.model.TimeSlot;

public interface BookingOrderDAO {
	public DBCollection getBookingCollection();
	public void saveBookingOrder(DBCollection orderColl,BookingOrder bookingOrder);
	public List<BookingOrderResponse> readAll(DBCollection orderColl);
    public List<BookingOrderResponse> readByBookingSlot(DBCollection orderColl,TimeSlot currentOrderTimeSlot);
}
