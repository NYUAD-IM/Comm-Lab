var cX = 0;
var cY = 0;
var oX = 0;
var oY = 0;

var x = 0;
var y = 0;

function showClientMousePosition(){
	cX = event.clientX;
 	cY = event.clientY;

 	document.getElementById('client-x').innerHTML = cX;
 	document.getElementById('client-y').innerHTML = cY;
}

function showOffsetMousePosition() {
  oX = event.offsetX;
  oY = event.offsetY;

  document.getElementById('offset-x').innerHTML = oX;
  document.getElementById('offset-y').innerHTML = oY;
}

function showScrollPosition() {

  x = window.scrollX;
  y = window.scrollY;

  document.getElementById('scroll-x').innerHTML = x;
  document.getElementById('scroll-y').innerHTML = y;

  console.log( x + ", " + y );
 
}