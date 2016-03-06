package com.slotbooking.model;

import java.util.List;

public class BookingOrder {
	List<Item> items;
	String vanNumber;
	String cartonNumber;
	TimeSlot bookingSlot;
	public BookingOrder() {
	}
	public BookingOrder(List<Item> items, String vanNumber,
			String cartonNumber, TimeSlot bookingSlot) {
		super();
		this.items = items;
		this.vanNumber = vanNumber;
		this.cartonNumber = cartonNumber;
		this.bookingSlot = bookingSlot;
	}
	public List<Item> getItems() {
		return items;
	}
	public void setItems(List<Item> items) {
		this.items = items;
	}
	public String getVanNumber() {
		return vanNumber;
	}
	public void setVanNumber(String vanNumber) {
		this.vanNumber = vanNumber;
	}
	public String getCartonNumber() {
		return cartonNumber;
	}
	public void setCartonNumber(String cartonNumber) {
		this.cartonNumber = cartonNumber;
	}
	public TimeSlot getBookingSlot() {
		return bookingSlot;
	}
	public void setBookingSlot(TimeSlot bookingSlot) {
		this.bookingSlot = bookingSlot;
	}
	@Override
	public String toString() {
		return "BookingOrder [items=" + items + ", vanNumber=" + vanNumber
				+ ", cartonNumber=" + cartonNumber + ", bookingSlot="
				+ bookingSlot + "]";
	}
}

