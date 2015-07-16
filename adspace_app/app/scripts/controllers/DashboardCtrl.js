mainctrl.controller('DashboardCtrl', function ($scope,hordingservice) {

	 $scope.orders = [ { "orderNum":"OR9842" , "customer":"Mr. Srinivas","status":"Running","contact":"912993456782" },
 					  { "orderNum":"OR9843" , "customer":"Mr. Patil","status":"Running","contact":"919932356782" },		
 					  { "orderNum":"OR9844" , "customer":"Mr. Gandhi","status":"Running","contact":"918991456782" },	
 					  { "orderNum":"OR9845" , "customer":"Mr. Bilal","status":"Running","contact":"912923456782" },
 					  { "orderNum":"OR9849" , "customer":"Mr. Cherra","status":"Running","contact":"912912456782" }, 	
 					  { "orderNum":"OR9850" , "customer":"Mr. Saleem","status":"Running","contact":"912911345672" },	
 					  { "orderNum":"OR9846" , "customer":"Mr. Ankit","status":"Running","contact":"911993456782" },
 					  ];
	 $scope.todos = [
                         { 'task':"  Call to mr. suresh" ,
                 		'reminder': "Remind"
                 		},
                 	    { 'task':"  Meeting with Mr. akash" ,
	                    	'reminder': "Remind"
	                    	},	
	                    	{ 'task':"  Call to cherra for renewal",
		                      'reminder': "Remind"
		                 	},
		                    { 'task':"  Meeting with Mr. akash",
			                  'reminder':"Remind"
			                },            	
			       ];

	 
	 
	 $scope.options = [{label:"option1",value:"1"},{label:"option2",value:"2"},{label:"option3",value:"3"}];

	 $scope.submit =  function(isvalid, index){
			if(isvalid)
 		$scope.step = index;
     };

        
$scope.remind = function(task){
     alert(task); 
  	
   };

$scope.setOrderStep = function(index)
{
   $scope.orderStep = index;
};
 
$scope.setOrderStep(1);

$scope.setHordingStep = function(index)
{
   $scope.hordingStep = index;
};
 
$scope.setHordingStep(1);
$scope.deleteRow = function(task){
	
			if(confirm("sure to delete")){
  		var index = -1;		
			var taskArr = eval( $scope.todos );
			for( var i = 0; i < taskArr.length; i++ ) {
				if( taskArr[i].task === task ) {
					index = i;
					break;
				}
			}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.todos.splice( index, 1 );		
	    }	
};
	  
	$scope.addRow = function(){
	
		$scope.todos.push({ 'task':" "+$scope.task, 'reminder': "Remind"});
		$scope.task = '';
	};
  	
 var hording1 = {
			name: "chandanagar",
			link: "chandanagar.html",
			detail: "Currently used by Mr. Abhishek will be free on 12/09/2015"
 	};
 var hording2 = {
			name: "hitech city",
			link: "hitechcity.html",
			detail: "Currently used by Mr. Ashok will be free on 12/10/2015"
 	};

	var hording3 = {
			name: "kukatpally",
			link: "kukatpally.html",
			detail: "Currently used by Mr. Avinash will be free on 12/12/2015"
 	};
 	
 var hording4 = {
			name: "madinaguda",
			link: "madinaguda.html",
			detail: "This hording is free "
 	};
 		
 	
 var hordings = new Array(4);
 hordings[0] = hording1;
 hordings[1] = hording2;
 hordings[2] = hording3;
 hordings[3] = hording4;
 $scope.hordings = hordings;
 

 var topboxes = new Array(4);
	topboxes[0] = "90" ;
	topboxes[1] = "41,410";
	topboxes[2] = "760";
	topboxes[3] = "2,000";  
 
 $scope.topboxes = topboxes;

});
