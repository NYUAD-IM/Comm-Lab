console.log("Javascript!!!");

var me = "Craig";

var specialText = document.getElementById("special-text");
specialText.style.display = "block";

//Cast Button Event Listener
var castButton = document.getElementById("cast-button");
var doSomething = function(){
	console.log("You pressed me?");
	var allText = document.getElementsByClassName("text-container");
	for (text of allText){
		text.style.display = "none";
	}
	var castText = document.getElementById('cast-text');
	castText.style.display = "block";

	var iFrameVideo = document.getElementById('the-video');
	iFrameVideo.style.display = "block";
};
castButton.addEventListener("click", doSomething);

//Reviews Button Event Listener
var reviewsButton = document.getElementById("reviews-button");
var doSomethingReviews = function(){
	console.log("You pressed me?");
	var allText = document.getElementsByClassName("text-container");
	for (text of allText){
		text.style.display = "none";
	}
	var reviewsText = document.getElementById('reviews-text');
	reviewsText.style.display = "block";
};
reviewsButton.addEventListener("click", doSomethingReviews);

//BTS Button Event Listener
var btsButton = document.getElementById("bts-button");
var doSomethingBTS = function(){
	console.log("You pressed me?");
	var allText = document.getElementsByClassName("text-container");
	for (text of allText){
		text.style.display = "none";
	}
	var btsText = document.getElementById('bts-text');
	btsText.style.display = "block";
};
btsButton.addEventListener("click", doSomethingBTS);







