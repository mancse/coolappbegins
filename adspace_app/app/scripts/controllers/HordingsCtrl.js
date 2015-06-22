angular.module('adSpaceApp').controller('HordingsCtrl', function ($scope){
'use strict';
$scope.dtOptions = {
				
				iDisplayLength: 10,


				// These 2 lines are for styling. Ignore!
				///sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
				sbPaginationType: "bootstrap",
				// End

			}

			$scope.dtOptions= {
				sAjaxSource: 'data/hordings.json',
				sAjaxDataProp: 'result',
				bProcessing: false,
				bPaginate: true,
                bLengthChange: true,
                bFilter: true,
                bSort: true,
                bInfo: true,
                bAutoWidth: false,
				
			}
			


			// This is an example of column callback
			$scope.imgCB = function(data) {
			
				return '<img src="../images/'+data.url+'"class="img-circle" alt="user image" width="60" height="50">';
			
			}

});	
