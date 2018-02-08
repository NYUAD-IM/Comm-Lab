console.log("sup")

// declaring a variable??
// thingholder / slot / bucket
let myString
myString = "9"

let anything
anything = 9

// console.log(anything)

anything = "whaddup"

// console.log(anything)

let mySum = myString + myString
// console.log(mySum)

// strings (= words)
// numbers
// boolean

let myBool = false

// declaring
let myVar
// initializing
myVar = "whatever"
// using
// console.log(myVar)


//conditionals
// if something is in a particular state, do that, otherwise do this

// if(!myBool){
//   //do this
//   console.log('my bool is false')
// }else{
//   //do that
//   console.log('the condition wasnt true')
// }



//event listeners

let myBlock = document.getElementById('myFirstBlock')

myBlock.onclick = () => {
  myBlock.style.height = '0px'

  setTimeout( () => {
    let myVideo = document.getElementById('myVideo')
    myVideo.style.display = 'block'
    setTimeout(myVideo.play(), 300)
  }, 1000)
}







//---
