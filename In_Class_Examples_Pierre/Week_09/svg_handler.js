var canvas;

var myImage;
var rect;
var circle_red;
var circle_yellow;

canvas = document.getElementById('myCanvas');

canvas.style.position = 'absolute';
canvas.style.width = '100%';
canvas.style.height = '100%';

paper.setup(canvas);

paper.project.importSVG('abstract.svg', function(item, origin){
  myImage = item;


  rect = myImage.children.rect;

  console.log(rect);

  circle_red = myImage.children.circles.children.red;
  circle_yellow = myImage.children.circles.children.yellow;

  rect.onMouseDown = function(){
    console.log('clicked rectangle');

    rect.style.fillColor = new paper.Color(1, 0, 0);
  };

  circle_red.onMouseDown = function(){
    console.log('clicked red circle!');

    circle_red.opacity = 0;
  };

  circle_yellow.onMouseDown = function(){
    console.log('clicked yellow circle:', circle_yellow.shadowOffset);

    circle_yellow.shadowColor = 'black';
    circle_yellow.shadowOffset = new paper.Point(5, 5);
    circle_yellow.shadowBlur = 12;
  };
});
