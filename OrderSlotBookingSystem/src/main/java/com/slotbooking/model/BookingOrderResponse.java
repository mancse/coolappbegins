package com.slotbooking.model;

public class BookingOrderResponse {
	String orderId;
	BookingOrder bookingOrder;
	
	public BookingOrderResponse() {

	}

	public BookingOrderResponse(String orderId, BookingOrder bookingOrder) {
		super();
		this.orderId = orderId;
		this.bookingOrder = bookingOrder;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public BookingOrder getBookingOrder() {
		return bookingOrder;
	}

	public void setBookingOrder(BookingOrder bookingOrder) {
		this.bookingOrder = bookingOrder;
	}

	@Override
	public String toString() {
		return "BookingOrderResponse [orderId=" + orderId + ", bookingOrder="
				+ bookingOrder + "]";
	}
}
