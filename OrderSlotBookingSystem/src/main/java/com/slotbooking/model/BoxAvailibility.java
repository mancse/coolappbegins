package com.slotbooking.model;

public class BoxAvailibility {
	String boxNumber;
	Double boxUsedSpace;
	Double boxSpaceAvailable;
	
	public BoxAvailibility() {

	}
	public BoxAvailibility(String boxNumber, Double boxSpaceAvailable,Double boxUsedSpace) {
		super();
		this.boxNumber = boxNumber;
		this.boxSpaceAvailable = boxSpaceAvailable;
		this.boxUsedSpace = boxUsedSpace;
	}
	public String getBoxNumber() {
		return boxNumber;
	}
	public void setBoxNumber(String boxNumber) {
		this.boxNumber = boxNumber;
	}
	public Double getBoxSpaceAvailable() {
		return boxSpaceAvailable;
	}
	public void setBoxSpaceAvailable(Double boxSpaceAvailable) {
		this.boxSpaceAvailable = boxSpaceAvailable;
	}
	
	public Double getBoxUsedSpace() {
		return boxUsedSpace;
	}
	public void setBoxUsedSpace(Double boxUsedSpace) {
		this.boxUsedSpace = boxUsedSpace;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((boxNumber == null) ? 0 : boxNumber.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BoxAvailibility other = (BoxAvailibility) obj;
		if (boxNumber == null) {
			if (other.boxNumber != null)
				return false;
		} else if (!boxNumber.equals(other.boxNumber))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "BoxAvailibility [boxNumber=" + boxNumber
				+ ", boxSpaceAvailable=" + boxSpaceAvailable + "]";
	}
}
