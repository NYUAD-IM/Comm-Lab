function showClientMousePosition() {

  var cX = event.clientX;
  var cY = event.clientY;

  document.getElementById('client-x').innerHTML = cX;
  document.getElementById('client-y').innerHTML = cY;

}


function showOffsetMousePosition() {

  var oX = event.offsetX;
  var oY = event.offsetY;

  document.getElementById('offset-x').innerHTML = oX;
  document.getElementById('offset-y').innerHTML = oY;

}


// https://www.w3schools.com/jsref/event_clientx.asp
// event.screenX;
// event.screenY; (?)
