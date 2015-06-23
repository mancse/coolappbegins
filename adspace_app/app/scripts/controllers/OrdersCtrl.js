var app = angular.module('adSpaceApp.controller', ['datatablesDirectives']);
app.controller('OrdersCtrl', function ($scope){
'use strict';
$scope.dtOptions = {
				
				iDisplayLength: 10,


				// These 2 lines are for styling. Ignore!
				///sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
				sbPaginationType: "bootstrap",
				// End

			}

			$scope.dtOptions = {
				sAjaxSource: 'data/orders.json',
				sAjaxDataProp: 'result',
				bProcessing: false,
				bPaginate: true,
                bLengthChange: true,
                bFilter: true,
                bSort: true,
                bInfo: true,
                bAutoWidth: false,
				
			}
			$scope.idCB = function(data){
			
				return '<a href="pages/examples/invoice.html">'+data.id+'</a>';
			
			}
			$scope.aboutCB = function(data) {
				if(data.status == "running")
					return ' <span class="label label-success col-md-7 col-md-offset-2" >'+data.status+'</span>';
				 else if(data.status == "completed")
				 	return ' <span class="label label-info col-md-7 col-md-offset-2">'+data.status+'</span>';
				 else if(data.status == "new")
				 	return ' <span class="label label-default col-md-7 col-md-offset-2">'+data.status+'</span>';
				 else if(data.status == "pending")
				 	return ' <span class="label label-danger col-md-7 col-md-offset-2">'+data.status+'</span>';
				 else if(data.status == "expiring")
				 	return ' <span class="label label-warning col-md-7 col-md-offset-2 ">'+data.status+'</span>';
			}
    

});
