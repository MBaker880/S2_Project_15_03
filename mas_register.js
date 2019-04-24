"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author: Mackenzie Baker
   Date:   4.23.2019
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/
/* ---------------------------------------------------------------------------------------------------------- */

// Runs the designated function when the page is loaded.
window.addEventListener("load", function () {
      // Calls the following function.
      calcCart();
      // Runs the following function when the regSubmit button is clicked.
      document.getElementById("regSubmit").onclick = sessionTest;
      // Targets the following ID's inputs with the onblur effect.
      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("lnBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      document.getElementById("banquetBox").onblur = calcCart;
})
















/* ---------------------------------------------------------------------------------------------------------- */