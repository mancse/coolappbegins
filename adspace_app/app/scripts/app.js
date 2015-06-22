<<<<<<< HEAD
var app = angular.module("adSpaceApp", [
   'ngRoute'
]);

app.config(function($routeProvider) {

'use strict';
  $routeProvider.when('/dashboard', {templateUrl: 'views/dashboard.html', controller: 'DashboardCtrl'}).
  				 when('/orders', {templateUrl:'views/orders.html', controller: 'OrdersCtrl'}).
  				 when('/hordings', {templateUrl:'views/hordings.html', controller: 'HordingsCtrl'}).
  				 when('/notes', {templateUrl:'views/notes.html', controller: 'NotesCtrl'}).
  				 when('/opportunities', {templateUrl:'views/opportunities.html', controller: 'OpportunitiesCtrl'}).
  				 when('/contacts', {templateUrl:'views/contacts.html', controller: 'ContactsCtrl'}).
  				 when('/meetings', {templateUrl:'views/calendar.html', controller: 'CalendarCtrl'}).
  				 when('/todos', {templateUrl:'views/todos.html', controller: 'TodosCtrl'}).
  				 when('/mailbox', {templateUrl:'views/mailbox.html', controller: 'MailboxCtrl'}).
  				 when('/reminders', {templateUrl:'views/reminders.html', controller: 'RemindersCtrl'}).
  				 when('/archivedorders', {templateUrl:'views/archivedorders.html', controller: 'ArchivedordersCtrl'}).
  				 when('/neworder', {templateUrl:'views/neworder.html', controller: 'NeworderCtrl'}).
  				 when('/newhording', {templateUrl:'views/newhording.html', controller: 'NewhordingCtrl'});
  				
});

=======
'use strict';

/**
 * @ngdoc overview
 * @name adspaceAppApp
 * @description
 * # adspaceAppApp
 *
 * Main module of the application.
 */
angular
  .module('adspaceAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
>>>>>>> eb2827c1f9506150e5f7c55f2798459989659683
