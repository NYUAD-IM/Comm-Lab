function changeContent() {

  document.getElementById('title1').innerHTML = "Comm Lab";
  document.getElementById('title1').style.color = "white";
  document.getElementById('title1').style.backgroundColor = "rgb(255,0,0)";
  document.getElementById('title1').style.fontSize = "40px";
  document.getElementById('info1').innerHTML = "Intro to JavaScript";
  document.getElementById('info1').style.color = "#FFF";
  document.getElementById('info1').style.fontStyle = "Italic";

  // Take a look at "HTMLCollection(3)" in Console.
  console.log( document.getElementsByClassName('box') );

  document.getElementsByClassName('box')[0].style.backgroundColor = "#00F";
  document.getElementsByClassName('box')[0].style.float = "none";
  document.getElementsByClassName('box')[0].style.position = "absolute";
  document.getElementsByClassName('box')[0].style.left = "100px";
  document.getElementsByClassName('box')[0].style.top = "100px";

  document.getElementsByClassName('box')[1].style.backgroundColor = "#0F0";
  document.getElementsByClassName('box')[1].style.float = "none";
  document.getElementsByClassName('box')[1].style.position = "absolute";
  document.getElementsByClassName('box')[1].style.left = "300px";
  document.getElementsByClassName('box')[1].style.top = "200px";

  document.getElementsByClassName('box')[2].style.backgroundColor = "#F00";
  document.getElementsByClassName('box')[2].style.float = "none";
  document.getElementsByClassName('box')[2].style.position = "absolute";
  document.getElementsByClassName('box')[2].style.left = "500px";
  document.getElementsByClassName('box')[2].style.top = "300px";
  // You can do the same thing with id!
  document.getElementById('special-box').style.width = "400px";
  document.getElementById('special-box').style.height = "250px";

}
