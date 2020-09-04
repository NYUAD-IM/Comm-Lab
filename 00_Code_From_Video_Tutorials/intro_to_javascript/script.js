let myVariable;

myVariable = 2046;


// CONDITIONALS! (aka if statements)
// if something is true, then do X, otherwise, do Z
if(myVariable < 3){
  console.log("math works!")
}else{
  console.log("math is broken :(")
}

// numbers
// strings (because they are strings of characters)
// booleans (true or false)

// 1 - finding the desired element via a SELECTOR
let orangeParagraph = document.getElementById("orange-paragraph")

// 2 - events
orangeParagraph.addEventListener('click', () => {
  if(orangeParagraph.style.color == "orange"){
    orangeParagraph.style.color = "black";
  }else{
    orangeParagraph.style.color = "orange";
  }
})

let makeGhostTextAppear = () => {
  document.getElementById("ghost-text").innerText = "I am a ghost!";
}

let makeGhostTextDisappear = () => {
  setTimeout(() => {
    document.getElementById("ghost-text").innerText = "";
  }, 500)
}


let greetingElement = document.getElementById("greeting-text");

greetingElement.addEventListener('mouseenter', makeGhostTextAppear)
greetingElement.addEventListener('mouseleave', makeGhostTextDisappear)
