//first, we declare two variables, to keep track of our canvas
let canvas;
//and to keep track of our image
let myImage;

//here, we grab our <canvas> element from the index.html
canvas = document.getElementById('myCanvas');

//and we set its position and its dimensions
canvas.style.position = 'absolute';
canvas.style.width = '100%';
canvas.style.height = '100%';

//this line is the first line that should come in any webpage involving paper
//we set up our canvas to act as a receptacle for our SVG illustrations
paper.setup(canvas);

//now, we actually import the SVG. in our case, we import the file called jade-belt.svg
paper.project.importSVG('abstract.svg', (item, origin) => {

  //everything happening within the brackets between line 19 and line 31
  //are within the callback function, once jade-belt.svg is actually loaded (because it takes some time!)

  //the callback function gives us a thing called 'item' back. we store it inside our myImage variable
  myImage = item;

  //we set its bounds (i.e. its dimensions)
  myImage.bounds.width = 400;
  myImage.bounds.height = 200;

  //this is where we can define what happens for the event listeners attached to myImage
  //myImage has some children, among which there is 'belt'. this is the layer we've named inside Illustrator
  //'belt' also has at least one children, which are the individual graphic elements nested under it (e.g. lines, rectangles, etc.)
  //and each of these have an attribute called 'onMouseMove', which you can set to a function
  myImage.children.belt.children[0].onMouseMove = () =>{

    //in our case we define a function where it's going to print a message to the console
    console.log('mouse moving on top of the belt layer!');

    //and it is also going to change the strokeColor of the belt layer to red
    myImage.children.belt.children[0].strokeColor = 'red';
  };
});
