/*
** Validation service used for validating input order attributes.
*/
angular.module('slotBookingApp')
  .service('validationService',function () {
	  
	  /*
	  ** Method to validate attributes of an item entered in an order. Attributes are height,width and breadth.
	  */
	  this.validItemEntered = function(items)
	    {
	    	var error = "";
	    	if (items.length > 0)
	    	{
	    		for (var i=0;i<items.length;i++)
	    		{
	    			var item = items[i];
	    			if (item.category=="")
	    			{
	    				error="Enter Item Category";
	    				return error;
	    			}
	    			if (item.height=="" 
	    				|| isNaN(item.height) 
	    				|| (item.height <= 0 || item.height>15))
	    			{
	    				error="Enter Item Height in inch(1-15)";
	    				return error;
	    			}
	    			if (item.width=="" 
	    				|| isNaN(item.width) 
	    				|| (item.width <= 0 || item.width>30))
					{
	    				error="Enter Item Width in inch(1-30)";
	    				return error;
					}
	    			
	    			if (item.breadth=="" 
	    				|| isNaN(item.breadth) 
	    				|| (item.breadth <= 0 
	    				|| item.breadth>15))
					{
	    				error="Enter Item Breadth in inch(1-15)";
	    				return error;
					}
	    			
	    			if (item.details=="")
					{
	    				error="Enter Item details";
	    				return error;
					}
	    		}
	    	}
	    	
	    	return error;
	     };
	     
		 /*
		 ** Method to validate booking slot time. 
		 */
	     this.validBookingSlot = function(bookingSlot)
	     {
	    	 var year = bookingSlot.year;
	    	 var month = bookingSlot.month;
	    	 var day = bookingSlot.day;
	    	 var hour = bookingSlot.hour;
	    	 var minute = bookingSlot.minute;
	    	 var second = bookingSlot.second;
	    	 var error = "";
	    	 
	    	 if (hour < 9 || hour > 18)
	    	 {
	    		 error = "Enter valid hour between 9 to 18";
	    		 return error;
	    	 }
	    	 
	    	 if ((hour >=13 && hour < 14)
	    		 && (minute >= 0 && minute <=59)
	    		 && (second >= 0 && second <=59))
	    	 {
	    		 error = "Time slot between 1PM to 2PM is not valid";
	    		 return error;
	    	 }
	    	 
	    	 return error;
	     }
  });