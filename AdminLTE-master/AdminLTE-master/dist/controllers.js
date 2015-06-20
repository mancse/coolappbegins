angular.module('mySampleApp.controllers', []). 
    controller('myCtrl', function($scope, $location, $routeParams){
    $scope.save  = function() {$location.path('/table').replace();
    };
    $scope.hording1 = "chandanagar";
    }).
    controller('dummy', function($scope, $routeParams){
    $scope.id =2;
    
    
  	});
