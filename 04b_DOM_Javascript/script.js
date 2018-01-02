console.log('hello!');

//first we need to find our div in the DOM
//we do that through the unique id we gave it (i.e. theButton)
//and then we store it in a variable called button
let button = document.getElementById("theButton");

//then we add an EventListener to our button
//this means we need to specify which event we're listening for (in our case, a click event)
//and, in the second part, the action we want to take place when that happens
//it is going to be a function which hides the related div
button.addEventListener('click', () => {

	//similar to line 6, we find the element we want to affect
	let square = document.getElementById("theSquare");

	//we then set its opacity to none, by selecting it through its 'style' attribute (i.e. accessing its CSS)
	square.style.visibility = 'hidden';
});
