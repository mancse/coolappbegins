package com.slotbooking.services;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

import com.mongodb.DBCollection;
import com.slotbooking.model.BookingOrder;
import com.slotbooking.model.BookingOrderResponse;
import com.slotbooking.model.TimeSlot;
import com.slotbooking.mongodb.dao.BookingOrderDAO;
import com.slotbooking.mongodb.dao.BookingOrderDAOImpl;

@RunWith(PowerMockRunner.class)
@PrepareForTest({BookingOrderDAOImpl.class})
public class SlotBookingServiceImplTest {

	BookingOrder bookingOrderMock;
	SlotBookingServiceImpl service;
	DBCollection orderCollMock;
	@Before
	public void setup() {
		service = new SlotBookingServiceImpl();
		bookingOrderMock = Mockito.mock(BookingOrder.class);
		orderCollMock = Mockito.mock(DBCollection.class);
	}
	
	@Test
	public void placeNewOrder()
	{
		BookingOrderResponse bookingOrderRespMock = Mockito.mock(BookingOrderResponse.class);
		List<BookingOrderResponse> bookingOrderRespList = new ArrayList<BookingOrderResponse>();
		bookingOrderRespList.add(bookingOrderRespMock);
		
		Mockito.doReturn(bookingOrderMock).when(bookingOrderRespMock).getBookingOrder();
		
		TimeSlot timeSlotMock = Mockito.mock(TimeSlot.class);
	    Mockito.doReturn(timeSlotMock).when(bookingOrderMock).getBookingSlot();
	    
	    Mockito.doReturn("DEL-123").when(bookingOrderMock).getVanNumber();
		PowerMockito.mockStatic(BookingOrderDAOImpl.class);
		BookingOrderDAO daoMock = Mockito.mock(BookingOrderDAOImpl.class);
		PowerMockito.when(BookingOrderDAOImpl.getInstance()).thenReturn((BookingOrderDAOImpl) daoMock);
		PowerMockito.when(daoMock.getBookingCollection()).thenReturn(orderCollMock);
		PowerMockito.when(daoMock.readByBookingSlot(orderCollMock, timeSlotMock)).thenReturn(bookingOrderRespList);
		PowerMockito.when(daoMock.readAll(orderCollMock)).thenReturn(bookingOrderRespList);
		Mockito.doNothing().when(daoMock).saveBookingOrder(orderCollMock, bookingOrderMock);
		
		boolean isSaved = service.placeNewOrder(bookingOrderMock);
		assertTrue(isSaved);
	}
	
	@Test
	public void getAllOrdersWhenNoOrderPlaced()
	{
		BookingOrderResponse bookingOrderRespMock = Mockito.mock(BookingOrderResponse.class);
		List<BookingOrderResponse> bookingOrderRespList = new ArrayList<BookingOrderResponse>();
		bookingOrderRespList.add(bookingOrderRespMock);
		
		Mockito.doReturn(bookingOrderMock).when(bookingOrderRespMock).getBookingOrder();
		
		TimeSlot timeSlotMock = Mockito.mock(TimeSlot.class);
	    Mockito.doReturn(timeSlotMock).when(bookingOrderMock).getBookingSlot();
	    
	    //Mockito.doReturn("DEL-123").when(bookingOrderMock).getVanNumber();
		PowerMockito.mockStatic(BookingOrderDAOImpl.class);
		BookingOrderDAO daoMock = Mockito.mock(BookingOrderDAOImpl.class);
		PowerMockito.when(BookingOrderDAOImpl.getInstance()).thenReturn((BookingOrderDAOImpl) daoMock);
		PowerMockito.when(daoMock.getBookingCollection()).thenReturn(orderCollMock);
		PowerMockito.when(daoMock.readByBookingSlot(orderCollMock, timeSlotMock)).thenReturn(bookingOrderRespList);
		PowerMockito.when(daoMock.readAll(orderCollMock)).thenReturn(bookingOrderRespList);
		Mockito.doNothing().when(daoMock).saveBookingOrder(orderCollMock, bookingOrderMock);
		
		List<BookingOrderResponse> allPlacedOrders = service.getAllOrders();
		assertEquals(1,allPlacedOrders.size());
	}
	@Test
	public void getAllOrdersWhenOrderAlreadyPlaced()
	{
		BookingOrderResponse bookingOrderRespMock = Mockito.mock(BookingOrderResponse.class);
		List<BookingOrderResponse> bookingOrderRespList = new ArrayList<BookingOrderResponse>();
		bookingOrderRespList.add(bookingOrderRespMock);
		
		Mockito.doReturn(bookingOrderMock).when(bookingOrderRespMock).getBookingOrder();
		
		TimeSlot timeSlotMock = Mockito.mock(TimeSlot.class);
	    Mockito.doReturn(timeSlotMock).when(bookingOrderMock).getBookingSlot();
	    
	    Mockito.doReturn("DEL-123").when(bookingOrderMock).getVanNumber();
		PowerMockito.mockStatic(BookingOrderDAOImpl.class);
		BookingOrderDAO daoMock = Mockito.mock(BookingOrderDAOImpl.class);
		PowerMockito.when(BookingOrderDAOImpl.getInstance()).thenReturn((BookingOrderDAOImpl) daoMock);
		PowerMockito.when(daoMock.getBookingCollection()).thenReturn(orderCollMock);
		PowerMockito.when(daoMock.readByBookingSlot(orderCollMock, timeSlotMock)).thenReturn(bookingOrderRespList);
		PowerMockito.when(daoMock.readAll(orderCollMock)).thenReturn(bookingOrderRespList);
		Mockito.doNothing().when(daoMock).saveBookingOrder(orderCollMock, bookingOrderMock);
		service.placeNewOrder(bookingOrderMock);
		
		List<BookingOrderResponse> allPlacedOrders = service.getAllOrders();
		assertEquals(1,allPlacedOrders.size());
		
		//Check that the same van number retrieved which was entered during order placement.
		BookingOrderResponse bookingResp = allPlacedOrders.get(0);
		BookingOrder order = bookingResp.getBookingOrder();
		String vanNum = order.getVanNumber();
		
		assertEquals("DEL-123",vanNum);
	}
}
