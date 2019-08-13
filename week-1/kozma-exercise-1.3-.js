// Header file output
var header = require("../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Assignment 1.3") + '\n')
/*
============================================
; Title: Assignment 1.3
; Author: Keith Kozma
; Date: 12 August 2019
; Description: This is a simple program which demonstrates the capability "this" keyword.
;===========================================
*/

function CellPhone(manufacturer, model, color, price)
{
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function()
    {
      return this.price;
    }
    this.getModel = function()
    {
      return this.model;
    }
    this.getDetails = function()
    {
      return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: " + this.getPrice();
    }

}

var cellPhone = new CellPhone("Apple", "iPhone X", "White", "399.99")
{
  console.log(cellPhone.getDetails());

}
