Download code from the above github link. It contains two folder. 

a). OrderSlotBookingSystem(Java+ Restful webservice + MongoDB)
b). TransportManagement(AngularJs)


 Local setup can be created as follows:
-----------------------------------------------------------
a). Make maven build for OrderSlotBookingSystem. Maven build creates war named slotbooking_web_services.war. Just deploy it on tomcat. Hence, slotbooking web service will be running on port 8080.

b). To setup AngularJs app:
   - Node package manager including grunt+bower is used. And for scafolding Yoeman is used. 
   
   Steps:
   --------
   1. Install Node.js by following command in command prompt:
      npm install --global npm@latest
   2. Git must be installed on the system to run npm package manager. If not then install git also.
   3. Install grunt command line interface using following command:
      npm install --global yo bower grunt-cli
   4. Go inside TransportManagement folder and run following two commands:
      npm install    
        (this command will create node dependency and will create node_module)
      bower install 
        (bower dependency will be created and bower_module folder will be created)
   5. All is set and just run following command to deploy the angular project at localhost:9000.
      grunt serve
   
c). Once AngularJS project "TransportManagement" is deployed on localhost:9000 port, and order booking form appears which
asks for items to be added. Multiple items can be added in a single order. After items are added, user is navigated to the
next page one has to add time slot for booking. Current day and time is already pre-populated but one can modify as suited.
Maximum required validations are done at client end. 

d). After entering booking order time and carton number and van number, user has to confirm for placing the order.
e). All succesfully placed order can be viewed in another page Order details. Also, individual order details with item details
    can be viewed.


