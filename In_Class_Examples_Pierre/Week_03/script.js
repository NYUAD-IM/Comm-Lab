console.log("hello world!");

var myDiv = document.getElementById("myDiv");
var myDiv2 = document.getElementById("myDiv2");

console.log(myDiv);


var hasDivChanged = true;
myDiv.addEventListener('mouseover', function(){
  if(hasDivChanged === false){
    myDiv2.style.fontFamily = "Trebuchet MS";

    hasDivChanged = true;
  }else{
    myDiv2.style.fontFamily = "Times New Roman";

    hasDivChanged = false;
  }

});

var allTheDivs = document.getElementsByClassName("allTheDivs");

console.log(allTheDivs);

var myArray = ["one", "two", "three"];

var myNumber = 2;
var myName = "pierre";
var myXXXXXX = [];
