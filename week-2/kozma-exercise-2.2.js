// Header file output
var header = require("../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Assignment 2.2") + '\n')
/*
============================================
; Title: Assignment 2.2
; Author: Keith Kozma
; Date: 15 August 2019
; Description: This is a simple program that displays a person's full name and age by utilizing functions and object prototypes.
;===========================================
*/
//creating variable person with a function returning an age
var person = {
  getAge:function() {
    return this.age;
  }
};
//creating variable keith with defined object attributes
var keith = Object.create(person, {
  "age":
  {
    "value": "25"
  },
    "fullname":
    {
      "value": "Keith Kozma"
    }
});

keith.getAge();
//logging the values from the variables person and keith
console.log("The person's full name is: '%s'", keith.fullname);
console.log("The person's age is '%s'", keith.age);

