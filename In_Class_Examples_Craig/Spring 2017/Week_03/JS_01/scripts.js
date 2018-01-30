//Select for button one on the page
var buttonOne = document.getElementById('button-one');

//Attach click event
buttonOne.addEventListener("click", function(){

	console.log("You pressed button 1...");

	var allInfo = document.getElementsByClassName('info');
	console.log(allInfo);
	for (var i = 0; i < allInfo.length; i++){
		allInfo[i].style.display = "none";
	}

	var infoOne = document.getElementById("info-one");
	infoOne.style.display = "block";

	//Hide the other two elements
	//var infoTwo = document.getElementById("info-two");
	//infoTwo.style.display = "none";
	//var infoThree = document.getElementById("info-three");
	//infoThree.style.display = "none";
});

//Select for button two on the page
var buttonTwo = document.getElementById('button-two');

//Attach click event
buttonTwo.addEventListener("click", function(){
	console.log("You pressed button 2...");

	var allInfo = document.getElementsByClassName('info');
	console.log(allInfo);
	for (var i = 0; i < allInfo.length; i++){
		allInfo[i].style.display = "none";
	}

	var infoTwo = document.getElementById("info-two");
	infoTwo.style.display = "block";
});

//Select for button three on the page
var buttonThree = document.getElementById('button-three');

//Attach click event
buttonThree.addEventListener("click", function(){
	console.log("You pressed button 3...");

	var allInfo = document.getElementsByClassName('info');
	console.log(allInfo);
	for (var i = 0; i < allInfo.length; i++){
		allInfo[i].style.display = "none";
	}

	var infoThree = document.getElementById("info-three");
	infoThree.style.display = "block";
});




