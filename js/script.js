// Created by: Grace S
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the admisson fee depending on age and day of the week.
 */
function displayCost() {
  	// initialize variables
	let cost = " "
	
	// get age and day of the week
	let age = parseInt(document.getElementById('age').value)	
	let select = document.getElementById('day');
	let day = select.options[select.selectedIndex].value;
  	
	if (age <= 0) {
    cost = "Please enter a valid age."
  }
    else if (age < 5 || age > 95) {
		cost = "The admisson fee is FREE for you."
	}
	else if ((age >=12) && (age <=21)) {
		cost = "You get a student discount."
	}
  else if (((day == "Tuesday") && (age > 21)) || ((day == "Thursday") && (age > 21))) {
      cost = "You get a discount price."
  }
	else if ((age > 21) || (day != "")) {		
		cost = "You have to pay regular price."
	}
  else {
    cost = "Please make a proper selection above."
  }
  
  	// display the greeting
  	document.getElementById('display-results').innerHTML = cost
}