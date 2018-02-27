let mySound

function init(){
  mySound = new Howl({ src: 'technology.mp4'})

  mySound.play()

  mySound.loop(true)

  // //this waits 500ms to fade out to 0
  // setTimeout(function(){
  //   mySound.fade(1.0, 0.0, 500)
  // }, 500)
  //
  // //this waits 500ms to fade in to 1
  // setTimeout(function(){
  //   mySound.fade(0.0, 1.0, 500)
  // }, 1000)
}

function setVolume (value) {
  mySound.volume(value)
}
