function updateMousePosition() {

  var cX = event.clientX;
  var cY = event.clientY;

  document.getElementById('client-x').innerHTML = cX;
  document.getElementById('client-y').innerHTML = cY;


  // show or hide the boxes based on mouse x position!
  var boxL = document.getElementById('box-left');
  var boxC = document.getElementById('box-center');
  var boxR = document.getElementById('box-right');

  if (cX < 400) {

    boxL.style.visibility = "visible";
    boxC.style.visibility = "hidden";
    boxR.style.visibility = "hidden";

  } else if (cX >= 400 && cX < 800) {

    boxL.style.visibility = "hidden";
    boxC.style.visibility = "visible";
    boxR.style.visibility = "hidden";

  } else if (cX >= 800 && cX < 1200) {

    boxL.style.visibility = "hidden";
    boxC.style.visibility = "hidden";
    boxR.style.visibility = "visible";

  } else {

    boxL.style.visibility = "hidden";
    boxC.style.visibility = "hidden";
    boxR.style.visibility = "hidden";

  }

}
