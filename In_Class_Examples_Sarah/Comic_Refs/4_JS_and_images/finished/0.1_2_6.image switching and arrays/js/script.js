var leftSide = document.getElementById("left-side");
var rightSide = document.getElementById("right-side");

var imgName = "images/alice05.jpg";
var illusArray = ["alice05", "alice06", "alice07", "alice08", "alice09"];
var counter = 0;

var toggle = false;

// leftSide.addEventListener("click", swapImage);
rightSide.addEventListener("click", rotateImage);

leftSide.addEventListener("click", toggleImage);

function swapImage(){
	leftSide.src = imgName;
	console.log("in the code");
}

function rotateImage() {
	rightSide.src = "images/" + illusArray[counter] + ".jpg";
	

	if (counter >= illusArray.length-1) {
		counter = 0;
	} else {
		counter++;
	}
	
}

function toggleImage() {
	toggle = !toggle;
	var bgs = document.getElementsByClassName("container");
	for (i=0; i < bgs.length; i++){
		bgs[i].style.backgroundColor = "gray";
	}
	if (toggle == true) {
		leftSide.src = "images/faust01.jpg"
    	leftSide.className = "img-side-emp";
  	} else {
    	leftSide.src = "images/faust02.jpg"
    	leftSide.className = "img-side-emp";
  	}
}