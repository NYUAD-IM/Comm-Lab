function showClientMousePosition() {

  var cX = event.clientX;
  var cY = event.clientY;

  document.getElementById('client-x').innerHTML = cX;
  document.getElementById('client-y').innerHTML = cY;

  if (cX > 400 && cX < 800) {
    document.body.style.backgroundColor = "gray";
  } else {
    document.body.style.backgroundColor = "lightgray";
  }

}


function showOffsetMousePosition() {

  var oX = event.offsetX;
  var oY = event.offsetY;

  document.getElementById('offset-x').innerHTML = oX;
  document.getElementById('offset-y').innerHTML = oY;

  var box = document.getElementById('color-box');
  if (oX < 200) {
    box.style.backgroundColor = "red";
  } else {
    box.style.backgroundColor = "yellow";
  }

}
