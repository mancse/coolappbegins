angular.module('adSpaceApp').controller('NeworderCtrl', function ($scope, $location){
'use strict';
$scope.options = [{label:"option1",value:"1"},{label:"option2",value:"2"},{label:"option3",value:"3"}];
		
		$scope.submit =  function(isvalid){
			if(isvalid)
				$location.path('/dashboard');
        };
        
        $scope.cancel = function(){
        
			$location.path('/dashboard');
        };
});

