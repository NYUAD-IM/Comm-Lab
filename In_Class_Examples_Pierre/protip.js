///// event listeners
<div id="myDiv" onclick="myFunction()"></div>
document.getElementById("myDiv").onclick = myFunction
document.getElementById("myDiv").addEventListener("click", myFunction)


//// index.html

<script src="script.js">

<body onload="init()">


////script.js
let element

function init(){
  element = document.getElementById("myDiv")
}

document.body.on
