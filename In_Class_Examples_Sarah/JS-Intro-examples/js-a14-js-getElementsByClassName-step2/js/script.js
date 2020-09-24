function changeContent() {

  document.getElementById('title1').innerHTML = "Comm Lab";
  document.getElementById('title1').style.color = "white";
  document.getElementById('title1').style.backgroundColor = "rgb(255,0,0)";
  document.getElementById('title1').style.fontSize = "40px";

  document.getElementById('info1').innerHTML = "Intro to JavsScript";
  document.getElementById('info1').style.color = "#FFF";
  document.getElementById('info1').style.fontStyle = "Italic";

  // Take a look at "HTMLCollection(3)" in Console.
  console.log( document.getElementsByClassName('box') );

  document.getElementsByClassName('box')[0].style.backgroundColor = "#00F";
  document.getElementsByClassName('box')[1].style.backgroundColor = "#0F0";
  document.getElementsByClassName('box')[2].style.backgroundColor = "#F00";

}
