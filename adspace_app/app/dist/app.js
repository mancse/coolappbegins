var app = angular.module("mySampleApp", [
   'mySampleApp.controllers',
   'ngRoute'
]);

app.config(['$routeProvider',function($routeProvider) {

  $routeProvider.when("/table",{templateUrl: "/Users/jsinghchauhan/Desktop/Sample/sample_table.html", controller: "dummy"});
}]);