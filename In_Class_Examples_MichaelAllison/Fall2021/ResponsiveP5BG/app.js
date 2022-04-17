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
var lines = [];

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  for(let i = 0; i < 50; i++){
    lines.push(new Line());
  }
}


function draw() {
  lines.forEach(line => {
    line.wander();
    line.display();
  });
}


class Line {

  constructor(){

    let x = Math.random() * windowWidth;
    let y = Math.random() * windowHeight;

    let length = 500.0;

    this.p1x = x - length/2;
    this.p1y = y - length/2;

    this.p2x = x + length/2;
    this.p2y = y + length/2;

    let v = Math.random() * 200;
    this.color = color(v+10, v, v + 50, 5);

    this.setdir();

    setInterval(()=> {
      this.setdir();
    }, 5000);

  }

  setdir(){
    this.dir1x = (Math.random() * 2 - 1) * 1;
    this.dir1y = (Math.random() * 2 - 1) * 1;

    this.dir2x = (Math.random() * 2 - 1) * 1;
    this.dir2y = (Math.random() * 2 - 1) * 1;
  }

  wander(){

    this.p1x += this.dir1x;
    this.p1y += this.dir1y;

    this.p2x += this.dir2x;
    this.p2y += this.dir2y;

    if(this.p1x < 0 ) this.p1x = windowWidth;
    if(this.p1y < 0 ) this.p1y = windowHeight;
    if(this.p1x > windowWidth ) this.p1x = 0;
    if(this.p1y > windowHeight ) this.p1y = 0;

    if(this.p2x < 0 ) this.p2x = windowWidth;
    if(this.p2y < 0 ) this.p2y = windowHeight;
    if(this.p2x > windowWidth ) this.p2x = 0;
    if(this.p2y > windowHeight ) this.p2y = 0;
  }

  display(){
    stroke(this.color);
    line(this.p1x, this.p1y, this.p2x, this.p2y);
  }
}
