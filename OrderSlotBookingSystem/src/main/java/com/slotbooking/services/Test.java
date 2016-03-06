package com.slotbooking.services;

import java.net.UnknownHostException;
import java.util.List;

//import org.springframework.context.ApplicationContext;
//import org.springframework.context.annotation.AnnotationConfigApplicationContext;
//import org.springframework.data.mongodb.core.MongoOperations;
//import org.springframework.data.mongodb.core.MongoTemplate;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.core.query.Query;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.slotbooking.model.Item;
//import com.slotbooking.mongodb.config.MongoDBConfig;

public class Test {
	public static void main( String args[] ) {
		
	      try{
			
	         // To connect to mongodb server
	         MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
				
	         // Now connect to your databases
	         DB db = mongoClient.getDB( "test" );
	        
	         System.out.println("Connect to database successfully");
	         
	         DBCollection coll = db.getCollection("order");
	         System.out.println("Collection mycol selected successfully");
	         
	         BasicDBObject doc = new BasicDBObject("title", "MongoDB").
	                 append("description", "database").
	                 append("likes", 100).
	                 append("url", "http://www.tutorialspoint.com/mongodb/").
	                 append("by", "tutorials point");
	     				
	         //coll.insert(doc);
	         System.out.println("Document inserted successfully");
	         
	         List<String> dbs = mongoClient.getDatabaseNames();
	         System.out.println(dbs);
	         
	         	
	         DBCursor cursor = coll.find();
	         int i = 1;
				
	         while (cursor.hasNext()) { 
	            System.out.println("Inserted Document: "+i); 
	            System.out.println(cursor.next()); 
	            i++;
	         }
	         BasicDBObject searchQuery = new BasicDBObject().append("title", "MongoDB");
	         BasicDBObject updateQuery = new BasicDBObject();
	     	 updateQuery.append("$set", 
	     		new BasicDBObject().append("title", "Mongo"));
	         coll.updateMulti(searchQuery, updateQuery);
	      }catch(Exception e){
	         System.err.println( e.getClass().getName() + ": " + e.getMessage() );
	      }
	   }
}
