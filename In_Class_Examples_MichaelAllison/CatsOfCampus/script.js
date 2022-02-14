
////////////////////////
//DOM manipulation
////////////////////////

//create an element dynamically
var newElement = document.createElement('div');
newElement.style.width = "200px";
newElement.style.height = "200px";
newElement.style.backgroundColor = 'red';
var newPara = document.createElement('p');
var newText = document.createTextNode('hello i am created from script!');

newPara.appendChild(newText);
newElement.appendChild(newPara);

var main = document.getElementById('main');
main.appendChild(newElement);

////////////////////////
//scroll interaction
////////////////////////

function getScrollPercent() {
  //scrollY measures the current y of the top of the viewport
  //the final scroll position has 1 whole viewport of screen remaining
  //so the scrollable range is the total height - viewport height,
  //scrollY will be somehwere in that range
  let scrollRange = document.body.offsetHeight - window.innerHeight;
  return window.scrollY / scrollRange;
}

window.addEventListener('scroll', function(e){
  let percent = getScrollPercent();
  document.body.style.backgroundColor = 'rgb(' + 255 * percent + ', ' + 255 * (1.0-percent) + ', 255)';
});

////////////////////////
//mouse interaction
////////////////////////

//mouse coordinates are reported as either relative to the whole screen .screenX
//or relative to the browser viewport .clientX
//we can find the position in the current element by offsetting by the client position
//by the element's bounding rectangle, making the mouse relative to that object's top left pos
function getRelativeCoordinates(mouse, element) {
  let rect = element.getBoundingClientRect();
  let coords = {
    x: mouse.clientX - rect.left,
    y: mouse.clientY - rect.top
  };
  return coords;
}

//select all instances of a class
var sections = document.querySelectorAll(".section");
//iterate over them and modify them with code!
sections.forEach((section, i) => {
  section.addEventListener('mousemove', function(mouse){
    let coords = getRelativeCoordinates(mouse, section);
    //dividing by the client size of the element will normalize the coords from 0 to 1
    coords.x /= section.clientWidth;
    coords.y /= section.clientHeight;
    section.style.backgroundColor = 'rgb(' + 255 * coords.x + ', ' + 255 * coords.y + ', 255)';
  });
});

////////////////////////
//Time based interaction
////////////////////////

setTimeout(function() {
  newElement.remove();
}, 5000);

var interval = setInterval(function() {
  var newElement = document.createElement('div');
  newElement.style.width = "200px";
  newElement.style.height = "200px";
  newElement.style.backgroundColor = 'rgb(' + 255 * Math.random() + ', ' + 255 * Math.random() + ', ' + 255 * Math.random() + ')';
  newElement.style.position = 'absolute';
  let randPos = {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight
  }
  newElement.style.top = `${randPos.x}px`;
  newElement.style.left = `${randPos.y}px`;

  newElement.addEventListener('click', function() {
    newElement.remove();
  });

  document.body.appendChild(newElement);
}, 500);

setTimeout(function(){
  clearInterval(interval);
}, 10000);
