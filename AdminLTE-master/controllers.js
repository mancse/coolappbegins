angular.module('adSpaceApp.controllers', ['datatablesDirectives']). 
    controller('IndexCtrl', function($scope, $location, $routeParams){
        }).
    controller('DashBoardCtrl', function($scope){
    
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

    
       
  $scope.remind = function(task){
        alert(task); 
     	
      };
        	 
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
    }).
    controller('OrdersCtrl', function($scope){
    
    	$scope.dtOptions = {
				
				iDisplayLength: 10,


				// These 2 lines are for styling. Ignore!
				///sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
				sbPaginationType: "bootstrap",
				// End

			}

			$scope.dtOptionsExample2 = {
				sAjaxSource: 'data.json',
				sAjaxDataProp: 'result',
				bProcessing: false,
				bPaginate: true,
                bLengthChange: true,
                bFilter: true,
                bSort: true,
                bInfo: true,
                bAutoWidth: false,
				fnRowCallback: function(row, data, index, fullindex) {
					if (data.id === 1) {
						angular.element(row).addClass('blue');
					}
				}
			}
			


			// This is an example of column callback
			$scope.idCB = function(data) {
				if (data.id > 3) {
					return '<span class="label label-info">'+data.id+'</span>'
				} 
				return '<span class="label label-important">'+data.id+'</span>'
			}

			// Anoter example
			$scope.aboutCB = function(data) {
				return data.about.text.substring(0, 50) + '...';
			}
    
    }).controller('HordingsCtrl', function($scope){
    
    	$scope.dtOptions = {
				
				iDisplayLength: 10,


				// These 2 lines are for styling. Ignore!
				///sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
				sbPaginationType: "bootstrap",
				// End

			}

			$scope.dtOptionsExample2 = {
				sAjaxSource: 'data.json',
				sAjaxDataProp: 'result',
				bProcessing: false,
				bPaginate: true,
                bLengthChange: true,
                bFilter: true,
                bSort: true,
                bInfo: true,
                bAutoWidth: false,
				fnRowCallback: function(row, data, index, fullindex) {
					if (data.id === 1) {
						angular.element(row).addClass('blue');
					}
				}
			}
			


			// This is an example of column callback
			$scope.idCB = function(data) {
				if (data.id > 3) {
					return '<span class="label label-info">'+data.id+'</span>'
				} 
				return '<span class="label label-important">'+data.id+'</span>'
			}

			// Anoter example
			$scope.aboutCB = function(data) {
				return data.about.text.substring(0, 50) + '...';
			}
    
    }).controller('ContactsCtrl', function($scope){
    
    	$scope.dtOptions = {
				
				iDisplayLength: 10,


				// These 2 lines are for styling. Ignore!
				///sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
				sbPaginationType: "bootstrap",
				// End

			}

			$scope.dtOptionsExample2 = {
				sAjaxSource: 'data.json',
				sAjaxDataProp: 'result',
				bProcessing: false,
				bPaginate: true,
                bLengthChange: true,
                bFilter: true,
                bSort: true,
                bInfo: true,
                bAutoWidth: false,
				fnRowCallback: function(row, data, index, fullindex) {
					if (data.id === 1) {
						angular.element(row).addClass('blue');
					}
				}
			}
			


			// This is an example of column callback
			$scope.idCB = function(data) {
				if (data.id > 3) {
					return '<span class="label label-info">'+data.id+'</span>'
				} 
				return '<span class="label label-important">'+data.id+'</span>'
			}

			// Anoter example
			$scope.aboutCB = function(data) {
				return data.about.text.substring(0, 50) + '...';
			}
    
    }).controller('TodosCtrl', function($scope){
    
    	$scope.dtOptions = {
				
				iDisplayLength: 10,


				// These 2 lines are for styling. Ignore!
				///sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
				sbPaginationType: "bootstrap",
				// End

			}

			$scope.dtOptionsExample2 = {
				sAjaxSource: 'data.json',
				sAjaxDataProp: 'result',
				bProcessing: false,
				bPaginate: true,
                bLengthChange: true,
                bFilter: true,
                bSort: true,
                bInfo: true,
                bAutoWidth: false,
				fnRowCallback: function(row, data, index, fullindex) {
					if (data.id === 1) {
						angular.element(row).addClass('blue');
					}
				}
			}
			


			// This is an example of column callback
			$scope.idCB = function(data) {
				if (data.id > 3) {
					return '<span class="label label-info">'+data.id+'</span>'
				} 
				return '<span class="label label-important">'+data.id+'</span>'
			}

			// Anoter example
			$scope.aboutCB = function(data) {
				return data.about.text.substring(0, 50) + '...';
			}
    
    }).controller('ArchivedordersCtrl', function($scope){
    
    	$scope.dtOptions = {
				
				iDisplayLength: 10,


				// These 2 lines are for styling. Ignore!
				///sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
				sbPaginationType: "bootstrap",
				// End

			}

			$scope.dtOptionsExample2 = {
				sAjaxSource: 'data.json',
				sAjaxDataProp: 'result',
				bProcessing: false,
				bPaginate: true,
                bLengthChange: true,
                bFilter: true,
                bSort: true,
                bInfo: true,
                bAutoWidth: false,
				fnRowCallback: function(row, data, index, fullindex) {
					if (data.id === 1) {
						angular.element(row).addClass('blue');
					}
				}
			}
			


			// This is an example of column callback
			$scope.idCB = function(data) {
				if (data.id > 3) {
					return '<span class="label label-info">'+data.id+'</span>'
				} 
				return '<span class="label label-important">'+data.id+'</span>'
			}

			// Anoter example
			$scope.aboutCB = function(data) {
				return data.about.text.substring(0, 50) + '...';
			}
    
    }).controller('RemindersCtrl', function($scope){
    
    	$scope.dtOptions = {
				
				iDisplayLength: 10,


				// These 2 lines are for styling. Ignore!
				///sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
				sbPaginationType: "bootstrap",
				// End

			}

			$scope.dtOptionsExample2 = {
				sAjaxSource: 'data.json',
				sAjaxDataProp: 'result',
				bProcessing: false,
				bPaginate: true,
                bLengthChange: true,
                bFilter: true,
                bSort: true,
                bInfo: true,
                bAutoWidth: false,
				fnRowCallback: function(row, data, index, fullindex) {
					if (data.id === 1) {
						angular.element(row).addClass('blue');
					}
				}
			}
			


			// This is an example of column callback
			$scope.idCB = function(data) {
				if (data.id > 3) {
					return '<span class="label label-info">'+data.id+'</span>'
				} 
				return '<span class="label label-important">'+data.id+'</span>'
			}

			// Anoter example
			$scope.aboutCB = function(data) {
				return data.about.text.substring(0, 50) + '...';
			}
    
    }).controller('OpportunitiesCtrl', function($scope){
    
    	$scope.dtOptions = {
				
				iDisplayLength: 10,


				// These 2 lines are for styling. Ignore!
				///sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
				sbPaginationType: "bootstrap",
				// End

			}

			$scope.dtOptionsExample2 = {
				sAjaxSource: 'data.json',
				sAjaxDataProp: 'result',
				bProcessing: false,
				bPaginate: true,
                bLengthChange: true,
                bFilter: true,
                bSort: true,
                bInfo: true,
                bAutoWidth: false,
				fnRowCallback: function(row, data, index, fullindex) {
					if (data.id === 1) {
						angular.element(row).addClass('blue');
					}
				}
			}
			


			// This is an example of column callback
			$scope.idCB = function(data) {
				if (data.id > 3) {
					return '<span class="label label-info">'+data.id+'</span>'
				} 
				return '<span class="label label-important">'+data.id+'</span>'
			}

			// Anoter example
			$scope.aboutCB = function(data) {
				return data.about.text.substring(0, 50) + '...';
			}
    
    }).controller('NotesCtrl', function($scope){
    
    	$scope.dtOptions = {
				
				iDisplayLength: 10,


				// These 2 lines are for styling. Ignore!
				///sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
				sbPaginationType: "bootstrap",
				// End

			}

			$scope.dtOptionsExample2 = {
				sAjaxSource: 'data.json',
				sAjaxDataProp: 'result',
				bProcessing: false,
				bPaginate: true,
                bLengthChange: true,
                bFilter: true,
                bSort: true,
                bInfo: true,
                bAutoWidth: false,
				fnRowCallback: function(row, data, index, fullindex) {
					if (data.id === 1) {
						angular.element(row).addClass('blue');
					}
				}
			}
			


			// This is an example of column callback
			$scope.idCB = function(data) {
				if (data.id > 3) {
					return '<span class="label label-info">'+data.id+'</span>'
				} 
				return '<span class="label label-important">'+data.id+'</span>'
			}

			// Anoter example
			$scope.aboutCB = function(data) {
				return data.about.text.substring(0, 50) + '...';
			}
    
    }).controller('MailboxCtrl', function($scope){


   });





