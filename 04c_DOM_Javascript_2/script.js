console.log('hello!');

//first we need to find our div in the DOM
//we do that through the unique id we gave it
//and then we store it in a variable called button_darker
let button_darker = document.getElementById("darker");

//then we add an EventListener to our button
//this means we need to specify which event we're listening for (in our case, a click event)
//and, in the second part, the action we want to take place when that happens
//it is going to be a function which hides the related div
button_darker.addEventListener('click', () => {

	//similar to line 6, we find the element we want to affect
	let square_darker = document.getElementById("square_darker");

	//now that we have the element we want to keep, we need to find all of the elements
	let all_squares = document.getElementsByClassName("squares");

	//then, we use a for loop to go through all of the elements
	// ---- ES6 ----- the new for loop allows you to loop over array elements directly like this
	// ---- ES6 ----- we are no longer iterating over a number (i), but over array elements (i.e. squares)
	for(let square of all_squares){
		square.style.visibility = 'hidden';
	}

	//so now that we got rid of all the squares, we need to force our specific square to re-appear.
	square_darker.style.visibility = 'visible';
});

//and then we do it again for all the other buttons!

//for the dark button
let button_dark = document.getElementById("dark");
button_dark.addEventListener('click', () => {

	let square_dark = document.getElementById("square_dark");

	let all_squares = document.getElementsByClassName("squares");

	for(square of all_squares){
		square.style.visibility = 'hidden';
	}

	square_dark.style.visibility = 'visible';
});

//for the light button
let button_light = document.getElementById("light");
button_light.addEventListener('click', () => {

	let square_light = document.getElementById("square_light");

	let all_squares = document.getElementsByClassName("squares");

	for(square of all_squares){
		square.style.visibility = 'hidden';
	}

	square_light.style.visibility = 'visible';
});

//for the lighter button
let button_lighter = document.getElementById("lighter");
button_lighter.addEventListener('click', () => {

	let square_lighter = document.getElementById("square_lighter");

	let all_squares = document.getElementsByClassName("squares");

	for(square of all_squares){
		square.style.visibility = 'hidden';
	}

	square_lighter.style.visibility = 'visible';
});
