package com.slotbooking.model;

import java.util.List;

public class SlotAvaibility {
	Long bookingTime;
	List<VanAvaibility> boxesAvailibility;
	public SlotAvaibility() {
	}
	public SlotAvaibility(Long bookingTime,
			List<VanAvaibility> boxesAvailibility) {
		this.bookingTime = bookingTime;
		this.boxesAvailibility = boxesAvailibility;
	}
	public Long getBookingTime() {
		return bookingTime;
	}
	public void setBookingTime(Long bookingTime) {
		this.bookingTime = bookingTime;
	}
	public List<VanAvaibility> getBoxesAvailibility() {
		return boxesAvailibility;
	}
	public void setBoxesAvailibility(List<VanAvaibility> boxesAvailibility) {
		this.boxesAvailibility = boxesAvailibility;
	}
	@Override
	public String toString() {
		return "SlotAvaibility [bookingTime=" + bookingTime
				+ ", boxesAvailibility=" + boxesAvailibility + "]";
	}
}
