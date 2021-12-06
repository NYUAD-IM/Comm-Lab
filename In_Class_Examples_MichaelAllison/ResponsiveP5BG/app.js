var hamburger = document.querySelector(".hamburger");
var sidenav = document.querySelector(".sidenav");

hamburger.addEventListener('click', function(){
    sidenav.classList.toggle("sidenav-open");
});

//create the same query from css
const mobileChangeMediaQuery = window.matchMedia('(max-width: 768px)')

function handleMobileChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched! Entered mobile size')
  }
  else {
    if(sidenav.classList.contains("sidenav-open"))
      sidenav.classList.remove("sidenav-open");
  }
}

// Register event listener
mobileChangeMediaQuery.addListener(handleMobileChange)
// Initial check
handleMobileChange(mobileChangeMediaQuery)


///p5 background

var canvas;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
}


function draw() {
  background(127);
  ellipse(width/2, height/2, 100);
}
