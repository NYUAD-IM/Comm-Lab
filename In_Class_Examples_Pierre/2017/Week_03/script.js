////------------------FUNCTION

//this is how you declare a function
//here we give it the name changeColorToBlue
changeColorToBlue = () => {
  //everything we want to happen when that function is called
  //will have to happen between the opened and closed curly brackets
  console.log("i want to change things to blue");
}

//in order to make a function do its thing, we need to call it:
changeColorToBlue();

//because we have included jQuery in our HTML page (line 31),
//we can access the $ sign, which give us a way to access the DOM (Document Object Model)
let myDiv2 = $("#myDiv2"); //this is equivalent to saying "document.getElementById('myDiv2')" and we store that in a variable called myDiv2

//just to make sure that jQuery works, we print the content of the variable myDiv2 to make sure we have an HTML element
console.log(myDiv2);

//here, we use jquery to add an event listener to the whole document
//that event happens whenever the document is 'ready', i.e. when all the HTML elements have loaded
$(document).ready(() =>{

  //once we are sure that all the HTML elements have loaded, we add an event listener to the body
  //it will listen for any 'keypress'
  $("body").keypress(() =>{

    //here, we tell it what to do when it actually hears the event 'keypress' i.e. when the user presses a key
    toggleBetweenImages(); //we call our function that we defined on line 54
  });
});

//we declare variables to specify where our images are located
let img1 = "./img1.png";
let img2 = "./img2.png";

//this is our toggleBetweenImages function. what it does is:
//1. fade out the current image
//2. when it is invisible, change the src attribute of the image, so that it links to another image
//3. fade the image back in
toggleBetweenImages = () => {

  //first, we need to grab our <img> tag from the html document and we store it in a variable called myImage
  let myImage = document.getElementById("mySlideshow").style.opacity = 0;

  //because it takes 0.3seconds to fade out, we use setTimeout to delay the following set of instructions by 0.3s
  setTimeout(() => {
    //let's compare the src attribute of our image with the location of img1. are they the same?
    if(myImage.src == img1){
      //if they are the same, then the code on lines 51-55 executes (between the curly brackets, basically)

      //that means we're already showing img1. so let's change the src attribute of the <img> tag to img2
      //that way, when we fade the image back in, it will display img2
      myImage.src = img2;
    }else if(myImage.src == img2){//otherwise, are we showing image 2?
        //if that's true, then let's show image 1!
        myImage.src = img1;
    }

    //now that we're done with all of that image switching, we set the opacity back to 1
    //thanks to our CSS property (style.css, line 14), it will smoothly transition back over 0.3 seconds
    myImage.style.opacity = 1;
  }, 300);
}

//finally, we use the setInterval function to call the toggleBetweenImages function over and over, at an interval of 3000ms (3 seconds)
setInterval(toggleBetweenImages, 3000);
