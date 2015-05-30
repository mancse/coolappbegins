package com.adspace.webservice;

import java.io.IOException;
import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

import com.adspace.dto.CustomersOrder;

@Component
@Path("/ad")
public class CustomerOrderWebService {

	public static final Logger LOGGER = Logger
			.getLogger(CustomerOrderWebService.class);

	@GET
	@Path("/order/getOrders")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCustomerAdOrders(
			@QueryParam("numOfOrders") String numOfOrders) {
		LOGGER.info("Number of requested orders: "+numOfOrders);
		CustomersOrder customerOrder = new CustomersOrder(1,"Sachin","29-05-2015");
		return Response.status(200).entity(customerOrder).build();
	}
	
	@GET
	@Path("/order/getOrderDetails")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCustomerAdOrderDetails(@QueryParam("orderId") String orderId) throws SQLException, IOException,
			ClassNotFoundException {
		LOGGER.info("OrderId of requested order detail: "+orderId);

		// taskService.triggerNGTaskCreation(request);
		String output = "Task creation in progress...";
		return Response.status(200).entity(output).build();
	}
}
