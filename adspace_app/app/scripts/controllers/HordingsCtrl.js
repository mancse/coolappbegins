mainctrl.controller('HordingsCtrl', function ($scope){
'use strict';
$scope.dtOptions = {
				
				iDisplayLength: 10,
				sbPaginationType: "bootstrap",
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
