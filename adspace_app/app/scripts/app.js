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

