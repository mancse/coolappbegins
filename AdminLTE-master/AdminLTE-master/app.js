var app = angular.module("mySampleApp", [
   'mySampleApp.controllers',
   'ngRoute'
]);

app.config(function($routeProvider) {

  $routeProvider.when("/dashboard", {templateUrl: "dashboard_new.html", controller: "dashBoardCtrl"}).
  				 when("/orders", {templateUrl:"orders.html", controller: "ordersCtrl"}).
  				 when("/hordings", {templateUrl:"hordings.html", controller: "hordingsCtrl"}).
  				 when("/notes", {templateUrl:"notes.html", controller: "notesCtrl"}).
  				 when("/reports", {templateUrl:"reports.html", controller: "reportsCtrl"}).
  				 when("/opportunities", {templateUrl:"opportunities.html", controller: "opportunitiesCtrl"}).
  				 when("/contacts", {templateUrl:"contacts.html", controller: "contactsCtrl"}).
  				 when("/meetings", {templateUrl:"calendar.html", controller: "calendarCtrl"}).
  				 when("/todos", {templateUrl:"todos.html", controller: "todosCtrl"}).
  				 when("/mailbox", {templateUrl:"mailbox.html", controller: "mailboxCtrl"}).
  				 when("/reminders", {templateUrl:"reminders.html", controller: "remindersCtrl"}).
  				 when("/archivedorders", {templateUrl:"archivedorders.html", controller: "archivedordersCtrl"});
});

