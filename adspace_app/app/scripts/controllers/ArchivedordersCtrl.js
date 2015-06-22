angular.module('adSpaceApp').controller('ArchivedordersCtrl', function ($scope){
'use strict';
$scope.dtOptions = {
				
				iDisplayLength: 10,


				// These 2 lines are for styling. Ignore!
				///sDom: "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
				sbPaginationType: 'bootstrap',
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
    
});
