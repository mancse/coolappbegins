angular.module('slotBookingApp')
  .service('utilityService',['$http','$q',function ($http,$q) {
	  var baseUrl = "http://localhost:8080";
	  this.writeOrderData = function(data)
	  {
		  var placeOrderUrl = baseUrl+"/OrderSlotBookingSystem/slotbooking/service/place/newOrder";
		 
		  var deferred = $q.defer();
		  var promise = $http.post(placeOrderUrl, data,{ timeout: 60000});
			
		  promise.then(function (response) {
			  deferred.resolve(response);
			},function(error){
				deferred.reject(error);
				 error.message = "NG_ERROR:Failed to write data: the server responded with a status "+error.status;
				 throw error;
			   });
		  
		  return deferred.promise;
	  }
	  
	  this.readAllOrders = function()
	  {
		  var placeOrderUrl = baseUrl+"/OrderSlotBookingSystem/slotbooking/service/get/allOrdersDetail";
		 
		  var deferred = $q.defer();
		  var promise = $http.get(placeOrderUrl,{ timeout: 60000});
			
		  promise.then(function (response) {
			  deferred.resolve(response);
			},function(error){
				deferred.reject(error);
				 error.message = "NG_ERROR:Failed to read NG data: the server responded with a status "+error.status;
				 throw error;
			   });
		  
		  return deferred.promise;
	  }
  }]);