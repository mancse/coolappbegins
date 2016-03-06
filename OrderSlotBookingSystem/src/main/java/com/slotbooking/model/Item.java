package com.slotbooking.model;
public class Item {
	
	//String id;
	String category;
	double height;
	double width;
	double breadth;
	String details;
	
	public Item() {
		super();
	}

	public Item(String category, float height, float width, float breadth,
			String details) {
		super();
		this.category = category;
		this.height = height;
		this.width = width;
		this.breadth = breadth;
		this.details = details;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	public double getWidth() {
		return width;
	}

	public void setWidth(double width) {
		this.width = width;
	}

	public double getBreadth() {
		return breadth;
	}

	public void setBreadth(double breadth) {
		this.breadth = breadth;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	@Override
	public String toString() {
		return "Item [category=" + category + ", height=" + height + ", width="
				+ width + ", breadth=" + breadth + ", details=" + details + "]";
	}
}
