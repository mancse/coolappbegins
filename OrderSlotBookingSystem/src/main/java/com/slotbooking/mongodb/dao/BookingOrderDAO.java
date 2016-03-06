package com.slotbooking.mongodb.dao;

import java.util.List;

import com.slotbooking.model.BookingOrder;
import com.slotbooking.model.BookingOrderResponse;
import com.slotbooking.model.Item;
import com.slotbooking.model.TimeSlot;

public interface BookingOrderDAO {
	public void saveBookingOrder(BookingOrder bookingOrder);
    
	public List<BookingOrderResponse> readAll();
    public List<BookingOrderResponse> readByBookingSlot(TimeSlot currentOrderTimeSlot);
     
}
