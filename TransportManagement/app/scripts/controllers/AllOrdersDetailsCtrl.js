'use strict';

/**
 * @ngdoc function
 * @name slotBookingApp.controller:AllOrdersDetailsCtrl
 * @description
 * # This controller is meant for displaying all set of placed orders 
 * # with its details like booking time and other attributes category,height,width and breadth.
 * Controller of the slotBookingApp
 */
angular.module('slotBookingApp')
  .controller('AllOrdersDetailsCtrl',['$scope','$q','$http','utilityService','validationService',
                                      function ($scope,$q,$http,utilityService,validationService){
	$scope.showOrderDetail = false;
	$scope.onBackPress = false;
	
	/*
	** Method to list all set of placed orders
	*/
	$scope.allOrdersLoad = function()
	{
		var promise = utilityService.readAllOrders();
		
		promise.then(function (response){
        	$scope.allOrders = response.data;
      	},function(reject){ 
      		console.log('Unable to place the order!!!: '+reject);});
	}
	
	/*
	** Method to show details of an specific order.
	*/
	$scope.getOrderDetail = function($event,orderId)
	{
		var allOrders = $scope.allOrders;
		
		for (var i=0;i<allOrders.length;i++)
		{
			var order = allOrders[i];
			if (order.orderId == orderId)
			{
				$scope.orderItems = order.bookingOrder.items;
				$scope.onBackPress = false;
				$scope.showOrderDetail = true;
				return;
			}
		}
	}
	
	$scope.goBack = function()
	{
		$scope.onBackPress = true;
		$scope.showOrderDetail = false;
	}
	
  }]);
