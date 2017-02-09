console.log('hello!');

//first we need to find our div in the DOM
//we do that through the unique id we gave it
//and then we store it in a variable called button_darker
var button_darker = document.getElementById("darker");

//then we add an EventListener to our button
//this means we need to specify which event we're listening for (in our case, a click event)
//and, in the second part, the action we want to take place when that happens
//it is going to be a function which hides the related div
button_darker.addEventListener('click', function(){

	//similar to line 6, we find the element we want to affect
	var square_darker = document.getElementById("square_darker");

	//now that we have the element we want to keep, we need to find all of the elements
	var all_squares = document.getElementsByClassName("squares");

	//then, we use a for loop to go through all of the elements
	for(var i = 0; i < all_squares.length; i++){
		all_squares[i].style.visibility = 'hidden';
	}

	//so now that we got rid of all the squares, we need to force our specific square to re-appear.
	square_darker.style.visibility = 'visible';
});

//and then we do it again for all the other buttons!

//for the dark button
var button_dark = document.getElementById("dark");
button_dark.addEventListener('click', function(){

	var square_dark = document.getElementById("square_dark");

	var all_squares = document.getElementsByClassName("squares");

	for(var i = 0; i < all_squares.length; i++){
		all_squares[i].style.visibility = 'hidden';
	}

	square_dark.style.visibility = 'visible';
});

//for the light button
var button_light = document.getElementById("light");
button_light.addEventListener('click', function(){

	var square_light = document.getElementById("square_light");

	var all_squares = document.getElementsByClassName("squares");

	for(var i = 0; i < all_squares.length; i++){
		all_squares[i].style.visibility = 'hidden';
	}
	
	square_light.style.visibility = 'visible';
});

//for the lighter button
var button_lighter = document.getElementById("lighter");
button_lighter.addEventListener('click', function(){

	var square_lighter = document.getElementById("square_lighter");

	var all_squares = document.getElementsByClassName("squares");

	for(var i = 0; i < all_squares.length; i++){
		all_squares[i].style.visibility = 'hidden';
	}

	square_lighter.style.visibility = 'visible';
});