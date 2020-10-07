var leftSide = document.getElementById('left-side');
var rightSide = document.getElementById('right-side');

var toggle = false;

// leftSide.addEventListener("click", swapImage);
leftSide.addEventListener("click", toggleImage);

function swapImage() {
	leftSide.src = "images/alice05.jpg";
}

function toggleImage() {
	
	if (toggle == true) {
		leftSide.src = "images/alice05.jpg";
		rightSide.src = "images/faust01.jpg";
	} else {
		leftSide.src = "images/alice04.jpg";
		rightSide.src = "images/faust02.jpg";
	}

	toggle = !toggle;
}