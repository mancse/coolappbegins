package com.slotbooking.model;

import java.util.Set;
public class VanAvaibility {
	String vanNumber;
	Double vanUsedSpace;
	Double vanSpaceAvailable;
	Set<BoxAvailibility> boxesAvailibility;
	public VanAvaibility() {
	}
	public VanAvaibility(String vanNumber, Double vanUsedSpace,Double vanSpaceAvailable,
			Set<BoxAvailibility> boxesAvailibility) {
		this.vanNumber = vanNumber;
		this.vanSpaceAvailable = vanSpaceAvailable;
		this.boxesAvailibility = boxesAvailibility;
		this.vanUsedSpace = vanUsedSpace;
	}
	
	public String getVanNumber() {
		return vanNumber;
	}
	public void setVanNumber(String vanNumber) {
		this.vanNumber = vanNumber;
	}
	public Double getVanSpaceAvailable() {
		return vanSpaceAvailable;
	}
	public void setVanSpaceAvailable(Double vanSpaceAvailable) {
		this.vanSpaceAvailable = vanSpaceAvailable;
	}
	
	public Set<BoxAvailibility> getBoxesAvailibility() {
		return boxesAvailibility;
	}
	public void setBoxesAvailibility(Set<BoxAvailibility> boxesAvailibility) {
		this.boxesAvailibility = boxesAvailibility;
	}
	
	public Double getVanUsedSpace() {
		return vanUsedSpace;
	}
	public void setVanUsedSpace(Double vanUsedSpace) {
		this.vanUsedSpace = vanUsedSpace;
	}
	@Override
	public String toString() {
		return "VanAvaibility [vanNumber=" + vanNumber + ", vanUsedSpace="
				+ vanUsedSpace + ", vanSpaceAvailable=" + vanSpaceAvailable
				+ ", boxesAvailibility=" + boxesAvailibility + "]";
	}
}
