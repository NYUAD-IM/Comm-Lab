var toggle = false;

function toggleBoxColor() {

  toggle = !toggle; // flip the boolean value!

  var box = document.getElementById('color-box');
  if (toggle == true) {
    box.style.backgroundColor = "blue";
  } else {
    box.style.backgroundColor = "yellow";
  }

}
