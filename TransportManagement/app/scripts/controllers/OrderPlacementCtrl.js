'use strict';

/**
 * @ngdoc function
 * @name employeeManagementApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the employeeManagementApp
 */
angular.module('slotBookingApp')
  .controller('OrderPlacementCtrl',['$scope','$q','$http','utilityService','validationService',
                                    function ($scope,$q,$http,utilityService,validationService) {
	$scope.title = 'Order#';
    $scope.items = [{"category":"","height":"","width":"","breadth":"","details":""}];
    $scope.bookingSlot = {"year":"","month":"","day":"","hour":"","minute":"","second":""};
    $scope.bookingDayList= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    $scope.bookingMonthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    $scope.bookingYearList = [2015,2016,2017,2018,2019,2020];
    $scope.bookingHourList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    $scope.bookingMinutesList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,
                              46,47,48,49,50,51,52,53,54,55,56,57,58,59];
    $scope.bookingSecondsList= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,
                                46,47,48,49,50,51,52,53,54,55,56,57,58,59];
    $scope.itemCategoryList = ["Electronics","Books","Medicines","House Hold Goods","Others"];
    
    $scope.vanNumberList = ["DEL-1251","MAH-4321","KOL-3625","HAR-4537"];
    $scope.boxNumberList = ["BOX-1","BOX-2","BOX-3","BOX-4","BOX-5","BOX-6","BOX-7","BOX-8","BOX-9","BOX-10",
                            "BOX-11","BOX-12","BOX-13","BOX-14","BOX-15","BOX-16","BOX-17","BOX-18","BOX-19","BOX-20"];
    
    $scope.order = {"onSlotBooking":false};
    $scope.order= {"onProceed": true};

    $scope.addOrderItems = function($event) {
        var items = $scope.items;
    	if (items.length)
        {
    		var error = validationService.validItemEntered(items);
        	if (error !== "")
        	{
        		alert(error);	
        		return;
        	}
        }
        var item = {};
    	items.push(item);
    	
        $event.stopPropagation();
        return false;
      };
      
    $scope.removeOrderItem = function($event,item) {
    	  var items = $scope.items;

          for (var i=0; i<items.length; i++)
          {
            if (items[i] === item)
            {
              items.splice(i,1);
            }
          }
          
          $event.stopPropagation();
          return false;
     };
     
    $scope.proceedForSlotBooking = function()
    {
     	if ($scope.items.length)
         {
     		var error = validationService.validItemEntered($scope.items);
         	if (error != "")
         	{
         		alert(error);	
         		return;
         	}
         }
     	$scope.order.onProceed = !($scope.order.onProceed);
    	$scope.order.onSlotBooking = !($scope.order.onSlotBooking);
    	var date = new Date();
    	$scope.bookingSlot.year = date.getFullYear();
    	$scope.bookingSlot.month = $scope.bookingMonthList[date.getMonth()];
    	$scope.bookingSlot.day = $scope.bookingDayList[date.getDay()];
    	$scope.bookingSlot.hour = date.getHours();
    	$scope.bookingSlot.minute = date.getMinutes();
    	$scope.bookingSlot.second = date.getSeconds();
    }
    $scope.placeOrder= function()
    {
    	var error = validationService.validBookingSlot($scope.bookingSlot);
    	if (error != "")
    	{
    		alert(""+error);
    		return;
    	}
    	var slot = {"year":$scope.bookingSlot.year,"month":$scope.bookingMonthList.indexOf($scope.bookingSlot.month),
    				"day":$scope.bookingDayList.indexOf($scope.bookingSlot.day),"hour":$scope.bookingSlot.hour,
    				"minute":$scope.bookingSlot.minute,"second":$scope.bookingSlot.second};
    	var data = {"items":$scope.items,"vanNumber":$scope.vanNumber,"cartonNumber":$scope.boxNumber,"bookingSlot":slot};
    	var promise = utilityService.writeOrderData(data);
    	
        promise.then(function (response){
        	if (response.status === 201)
        	{
        		alert("Order is placed successfully");
            	$scope.resetOrderPage();
        	}
        	
        	else if(response.status===202)
        	{
        		alert("Order is not placed as slot is not available");
            	$scope.resetOrderPage();
        	}
        	
        	else
        	{
        		alert("Hiccups in OrderBooking Service. Order can't be placed right now");
            	$scope.resetOrderPage();
        	}
         	
      	},function(reject){ 
      		console.log('Unable to place the order!!!: '+reject);});
    };
    
    $scope.resetOrderPage = function()
    {
    	$scope.order.onProceed = !($scope.order.onProceed);
    	$scope.order.onSlotBooking = !($scope.order.onSlotBooking);
    	$scope.items = [{"category":"","height":"","width":"","breadth":"","details":""}];
        $scope.bookingSlot = {"year":"","month":"","day":"","hour":"","minute":"","second":""};
    }
  }]);
