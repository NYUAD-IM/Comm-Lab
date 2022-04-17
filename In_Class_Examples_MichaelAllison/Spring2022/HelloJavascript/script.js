
var myArray = [];
var myNumArray = [1, 2, 3, 4, 5, 6];

console.log(myNumArray.length);

myNumArray.push(7);

console.log(myNumArray.length);

var subArr = myNumArray.slice(2, 5);
console.log(subArr);

////DOM Manipulation

var header = document.getElementById("header");
header.style.backgroundColor = "red";
header.style.fontSize = "30px";

header.innerHTML = "<p>something else?<p>";

var newElem = document.createElement('div');
newElem.style.width = "200px";
newElem.style.height = "200px";
newElem.style.backgroundColor = "green";

document.body.appendChild(newElem);

newElem.remove();

////

var overlay = document.querySelector('.overlay');
var popup = document.getElementById('popup');

popup.addEventListener('click', function(e){
  console.log(e);
  overlay.style.display = "block";
});

overlay.addEventListener('click', function(){
  overlay.style.display = "none";
});

////Scrolling

function getScrollPercent()
{
  let scrollRange = document.body.offsetHeight - window.innerHeight;
  return window.scrollY / scrollRange;
}

window.addEventListener('scroll', function(e){
  //console.log(window.scrollY, getScrollPercent());
  let percent = getScrollPercent();
  document.body.style.backgroundColor = 'rgb('+ 255 * percent +', '+ 255 * (1.0 - percent) +', 255)';
});

////Mouse Interaction

function getRelativeCoordinates(mouse, element){
  let rect = element.getBoundingClientRect();
  return {
    x: mouse.clientX - rect.left,
    y: mouse.clientY - rect.top
  };
}

var sections = document.getElementsByClassName('section');
//sections = document.querySelectorAll('.section');
for(let i = 0; i < sections.length; i++)
{
  sections[i].addEventListener('mouseenter', function(){
    //console.log("mouse entered section!");
  });
  sections[i].addEventListener('mousemove', function(mouse){
    coords = getRelativeCoordinates(mouse, sections[i]);
    //console.log("mouse moving inside section!", mouse.clientX, mouse.clientY, coords.x, coords.y);
    coords.x /= sections[i].clientWidth;
    coords.y /= sections[i].clientHeight;
    //console.log(coords.x, coords.y);
    sections[i].style.backgroundColor = 'rgb(255, '+ 255 * coords.x +', '+ 255 * coords.y +')';
  });
  sections[i].addEventListener('mouseleave', function(){
    //console.log("mouse left section!");
  });
}

///timing!

var timeoutHandle = setTimeout(function(){
  header.remove();
}, 5000);

//clearTimeout(timeoutHandle);

var intervalHandle = setInterval(function(){

  var newDiv = document.createElement('div');
  newDiv.style.position = "absolute";
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.backgroundColor = 'rgb('+ 255 * Math.random() +', '+ 255 * Math.random() +', '+ 255 *  Math.random() +')';
  newDiv.style.top = window.innerHeight * Math.random() + "px";
  newDiv.style.left = window.innerWidth * Math.random() + "px";

  newDiv.addEventListener('click', function(){
    newDiv.remove();
  });

  document.body.appendChild(newDiv);

}, 100);

setTimeout(function(){
  clearInterval(intervalHandle);
}, 5000);
