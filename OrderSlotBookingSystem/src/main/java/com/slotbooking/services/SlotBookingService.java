package com.slotbooking.services;

import java.util.List;

import com.slotbooking.model.BookingOrder;
import com.slotbooking.model.BookingOrderResponse;

public interface SlotBookingService {
	public List<BookingOrderResponse> getAllOrders();
	public boolean placeNewOrder(BookingOrder bookingOrder);
}
