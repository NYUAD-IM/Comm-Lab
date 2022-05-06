var hamburger = document.querySelector(".hamburger");
var sidenav = document.querySelector(".sidenav");

hamburger.addEventListener("click", function(){
  sidenav.classList.toggle("sidenav-open");
});

var mobileChangeMediaQuery = window.matchMedia('(max-width:768px)');

function handleMobileChange(e)
{
  if(e.matches)
  {
    //this means we are in mobile size!
    console.log("mobile size");
  }
  else{
    console.log("big size");
  }
}

//listen for change
mobileChangeMediaQuery.addListener(handleMobileChange);
//init at beginning
handleMobileChange(mobileChangeMediaQuery);

//p5

var canvas;
var lineDrawers = [];

function setup()
{
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  for(let i = 0; i < 50; i++){
    lineDrawers.push(new LineDrawer());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  lineDrawers.forEach(lineDrawer => {
    lineDrawer.wander();
    lineDrawer.display();
  });
}

class LineDrawer {

  constructor(){

    let x = Math.random() * windowWidth;
    let y = Math.random() * windowHeight;

    let length = Math.random() * 1000;

    this.p1x = x - length/2;
    this.p1y = y - length/2;

    this.p2x = x + length/2;
    this.p2y = y + length/2;

    let c = Math.random() * 200;
    this.color = color(c + 10, c, c + 50, 5);

    this.setDir();
  }

  setDir()
  {
    this.dir1x = Math.random() * 2 - 1;
    this.dir1y = Math.random() * 2 - 1;

    this.dir2x = Math.random() * 2 - 1;
    this.dir2y = Math.random() * 2 - 1;
  }

  wander()
  {
    this.p1x += this.dir1x;
    this.p1y += this.dir1y;

    this.p2x += this.dir2x;
    this.p2y += this.dir2x;

    if(this.p1x < 0) this.p1x = windowWidth;
    if(this.p1y < 0) this.p1y = windowHeight;

    if(this.p2x < 0) this.p2x = windowWidth;
    if(this.p2y < 0) this.p2y = windowHeight;

    if(this.p1x > windowWidth) this.p1x = 0;
    if(this.p1y > windowHeight) this.p1y = 0;

    if(this.p2x > windowWidth) this.p2x = 0;
    if(this.p2y > windowHeight) this.p2y = 0;
  }

  display(){
    stroke(this.color);
    //strokeWeight(14);
    line(this.p1x, this.p1y, this.p2x, this.p2y);
  }
}
