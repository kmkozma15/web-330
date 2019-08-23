// Header file output
var header = require("../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Exercise 3.3") + '\n')
/*
============================================
; Title: Assignment 3.3
; Author: Keith Kozma
; Date: 22 August 2019
; Description: This program demonstrates the use of a Singleton Pattern.
;===========================================
*/

//Creating singleton instance
var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
      var postgresDatabase = new Object("Database instance initialized!");
      return postgresDatabase;
 }
 // Returning the instance if true
    return {
      getInstance: function() {
        if (!instance) {
          instance = createInstance();
 }
    return instance;
 }
 }
})();
//Creating singleton function and logging whether the instance is true.
 function DatabaseSingletonTest()
 {
   var oracle = DatabaseSingleton.getInstance();
   var postgres = DatabaseSingleton.getInstance();

   console.log("Same Database instance? %s ", oracle === postgres);
 }

 DatabaseSingletonTest();
