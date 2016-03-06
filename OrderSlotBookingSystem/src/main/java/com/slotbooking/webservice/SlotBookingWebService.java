package com.slotbooking.webservice;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

import com.slotbooking.model.BookingOrder;
import com.slotbooking.model.BookingOrderResponse;
import com.slotbooking.model.Item;
import com.slotbooking.services.SlotBookingServiceImpl;

@Component
@Path("/slotbooking")
public class SlotBookingWebService {
	public static final Logger LOGGER = Logger
			.getLogger(BookingOrder.class);
	
	@GET
	@Path("/service/get/allOrdersDetail")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCompanyDetails() {

		SlotBookingServiceImpl service = new SlotBookingServiceImpl();
		List<BookingOrderResponse> allOrdersDetail = service.getAllOrders();
		System.out.println(allOrdersDetail);
		return Response.status(200).entity(allOrdersDetail).build();
	}
	
	@POST
	@Path("/service/place/newOrder")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response placeNewOrder(BookingOrder bookingOrder) {
		SlotBookingServiceImpl service = new SlotBookingServiceImpl();
		
		boolean orderPlaced = service.placeNewOrder(bookingOrder);
		if (orderPlaced)
		{
			return Response.status(201).build();
		}
		else
		{
			return Response.status(202).build();
		}
	}
}
