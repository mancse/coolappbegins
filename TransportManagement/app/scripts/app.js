'use strict';

/**
 * @ngdoc overview
 * @name employeeManagementApp
 * @description
 * # employeeManagementApp
 *
 * Main module of the application.
 */
angular
  .module('slotBookingApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/OrderPlacementView.html',
        controller: 'OrderPlacementCtrl'
      })
      .when('/allOrders', {
    	  templateUrl: 'views/AllOrdersView.html',
          controller: 'AllOrdersDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
