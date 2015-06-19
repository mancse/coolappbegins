angular.module('mySampleApp.controllers', ['datatablesDirectives']). 
    controller('myCtrl', function($scope, $location, $routeParams){
        }).
    controller('dashBoardCtrl', function($scope){
    
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
    controller('ordersCtrl', function($scope){
    
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
    
    }).controller('hordingsCtrl', function($scope){
    
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
    
    }).controller('contactsCtrl', function($scope){
    
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
    
    }).controller('todosCtrl', function($scope){
    
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
    
    }).controller('archivedordersCtrl', function($scope){
    
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
    
    }).controller('remindersCtrl', function($scope){
    
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
    
    }).controller('opportunitiesCtrl', function($scope){
    
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
    
    }).controller('notesCtrl', function($scope){
    
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
    
    }).controller('calendarCtrl', function($scope){
    
    $(function () {

        /* initialize the external events
         -----------------------------------------------------------------*/
        function ini_events(ele) {
          ele.each(function () {

            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
              title: $.trim($(this).text()) // use the element's text as the event title
            };

            // store the Event Object in the DOM element so we can get to it later
            $(this).data('eventObject', eventObject);

            // make the event draggable using jQuery UI
            $(this).draggable({
              zIndex: 1070,
              revert: true, // will cause the event to go back to its
              revertDuration: 0  //  original position after the drag
            });

          });
        }
        ini_events($('#external-events div.external-event'));

        /* initialize the calendar
         -----------------------------------------------------------------*/
        //Date for the calendar events (dummy data)
        var date = new Date();
        var d = date.getDate(),
                m = date.getMonth(),
                y = date.getFullYear();
        $('#calendar').fullCalendar({
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
          },
          buttonText: {
            today: 'today',
            month: 'month',
            week: 'week',
            day: 'day'
          },
          //Random default events
          events: [
            {
              title: 'All Day Event',
              start: new Date(y, m, 1),
              backgroundColor: "#f56954", //red
              borderColor: "#f56954" //red
            },
            {
              title: 'Long Event',
              start: new Date(y, m, d - 5),
              end: new Date(y, m, d - 2),
              backgroundColor: "#f39c12", //yellow
              borderColor: "#f39c12" //yellow
            },
            {
              title: 'Meeting',
              start: new Date(y, m, d, 10, 30),
              allDay: false,
              backgroundColor: "#0073b7", //Blue
              borderColor: "#0073b7" //Blue
            },
            {
              title: 'Lunch',
              start: new Date(y, m, d, 12, 0),
              end: new Date(y, m, d, 14, 0),
              allDay: false,
              backgroundColor: "#00c0ef", //Info (aqua)
              borderColor: "#00c0ef" //Info (aqua)
            },
            {
              title: 'Birthday Party',
              start: new Date(y, m, d + 1, 19, 0),
              end: new Date(y, m, d + 1, 22, 30),
              allDay: false,
              backgroundColor: "#00a65a", //Success (green)
              borderColor: "#00a65a" //Success (green)
            },
            {
              title: 'Click for Google',
              start: new Date(y, m, 28),
              end: new Date(y, m, 29),
              url: 'http://google.com/',
              backgroundColor: "#3c8dbc", //Primary (light-blue)
              borderColor: "#3c8dbc" //Primary (light-blue)
            }
          ],
          editable: true,
          droppable: true, // this allows things to be dropped onto the calendar !!!
          drop: function (date, allDay) { // this function is called when something is dropped

            // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject');

            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);

            // assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;
            copiedEventObject.backgroundColor = $(this).css("background-color");
            copiedEventObject.borderColor = $(this).css("border-color");

            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
              // if so, remove the element from the "Draggable Events" list
              $(this).remove();
            }

          }
        });

        /* ADDING EVENTS */
        var currColor = "#3c8dbc"; //Red by default
        //Color chooser button
        var colorChooser = $("#color-chooser-btn");
        $("#color-chooser > li > a").click(function (e) {
          e.preventDefault();
          //Save color
          currColor = $(this).css("color");
          //Add color effect to button
          $('#add-new-event').css({"background-color": currColor, "border-color": currColor});
        });
        $("#add-new-event").click(function (e) {
          e.preventDefault();
          //Get value and make sure it is not null
          var val = $("#new-event").val();
          if (val.length == 0) {
            return;
          }

          //Create events
          var event = $("<div />");
          event.css({"background-color": currColor, "border-color": currColor, "color": "#fff"}).addClass("external-event");
          event.html(val);
          $('#external-events').prepend(event);

          //Add draggable funtionality
          ini_events(event);

          //Remove event from text input
          $("#new-event").val("");
        });
      });
    
    });






