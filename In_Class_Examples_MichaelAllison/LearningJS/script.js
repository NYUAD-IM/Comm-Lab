
////////* debug console *////////

console.log("hello JS! Hi!");

// ////////* variables *////////
//
var myInteger = 5;
var myNumber = 5.123;
var myBool = true;
var myString = "Hello World!";
var myOtherString = 'Hello World Again!';
var myOtherNestedString = 'Hello "World" Again!';

var aNullVariable = null; //a null value, or lack of value
var anUndefinedVariable; //undefined, never assigned.

if(aNullVariable){
  console.log("I am not null");
} else {
  console.log("I am null");
}

if(anUndefinedVariable == undefined)
{
  console.log("I am undefined!");
}


const myUnchangebleValue = "this cannot be changed.";
//myUnchangebleValue = "something else";  //this would cause an error

{
  var thisExistsEverywhere = "I am omnipotent."
  let thisOnlyExistsInThisScope = "this only exists in the scope {...} it was delcared in.";
}
//console.log(thisOnlyExistsInThisScope); //this would cause an error b/c the variable is declared with 'let'
console.log(thisExistsEverywhere);
//
////////* functions *////////

//named functions

function clamp01(v) {
  return Math.min(1, Math.max(0, v));
}

function lerp(a, b, t) {
  clamp01(t);
  return (1-t) * a + b * t;
}

//functions can be variables too!
var someFunc = function() {
  return "this function had no name";
}

console.log(someFunc());

//arrow functions

const printHello = () => {
  console.log("hello");
}

//one line arrow functions can be abbreviated
const addText = (elem) => elem.innerHTML = "I'm new text added by JS!!";
const removeText = (elem) => elem.innerHTML = "";

//objects

var emptyObject = {};

var objectWithProperties = {
  someName: "hello!",
  someNumber: 2.123,
  aBool: false,
  aFn: function() {
    return 10;
  }
};

//accessed by dot .
console.log(objectWithProperties.someName);

////////* DOM - the document object model *////////

var aNewDivHTMLElement = document.createElement('div'); //this is not in the DOM yet!

aNewDivHTMLElement.innerHTML = "<p>This was added programmatically!</p>";
aNewDivHTMLElement.classList.add('red-text');

document.body.appendChild(aNewDivHTMLElement); //add the new element to the body, or any other element!

////////* show/hide nav overlay by changing css at runtime *////////

var navOverlay = document.getElementById('nav-overlay');

var hamburgerButton = document.getElementById('open-nav-overlay');
hamburgerButton.addEventListener("click", function() {
  navOverlay.style.display = 'block';
});

var closeNavButton = document.getElementById('close-nav-overlay');
closeNavButton.addEventListener("click", function() {
  navOverlay.style.display = 'none';
});
//
////////* mouse interaction *////////

var interactiveElement = document.querySelector('#interactive');

interactiveElement.addEventListener('mousemove', function(mouse) {

  //mouse pos is in terms of the larger aggregate object
  //so offset by the bouding rect top left position to get the position iside
  //this element
  var rect = mouse.target.getBoundingClientRect();
  let x = mouse.clientX - rect.left;
  let y = mouse.clientY - rect.top;

  let normalizedX = x / interactiveElement.clientWidth; //make 0 - 1 range
  let normalizedY = y / interactiveElement.clientHeight; //make 0 - 1 range

  //use the normalized values to change colors
  interactiveElement.style.backgroundColor = 'rgb(' + lerp(0, 255, normalizedX) + ', ' + lerp(0, 255, normalizedY) + ', 255)';
});
//
////////* timing *////////

setTimeout(function() {
  console.log("this happened one second in the future!");
}, 1000); //time in ms

//setTimeout returns a handle to the event, which you can use to cancel it
var aTimeoutHandle = setTimeout(function() {
  console.log("this will never happend because you immediatly cancelled it :(");
}, 1000);
//to cancel the timeout from occuring
clearTimeout(aTimeoutHandle);

var anIntervalHandle = setInterval(function() {
  console.log("this will happen over and over every 2 seconds forever... until cancelled");
}, 2000); //fire the event every 2 seconds

//how to stop an interval
setTimeout(function() {
  clearInterval(anIntervalHandle); //cancel interval using it's handle
}, 7000); //cancel interval in 7 seconds from now
