let playback_slider //we are going to need a variable to hold the playback slider

// this function will grab our slider from the HTML document and set its `max` attribute
// to whatever the duration of the audio clip is!
let init = () => {

  // grab the html element
  playback_slider = document.getElementById('playback-position-slider')

  // set its max attribute to the duration of the sound,
  // so that we don't set a playback position that doesn't exist!
  playback_slider.setAttribute('max', theSound.duration())
}

// this is how you create a sound with HowlJS
let theSound = new Howl({
  src: '../technology.mp4', //this is the path to the sound (required)
  loop: true, //and then optionally you can define whether it will loop (by default, false)
  onload: init //we can also have even listeners! this here will call a function once the sound is totally loaded
})

// this function is called from a <button> on the HTML page and plays the sound
let playSound = () => {
  theSound.play()
}

// this one adjusts the volume.
// the argument is the value of the slide on the HTML page
let adjustVolume = (value) => {
  theSound.volume(value)
}

// this function uses seek() to set the start position at the given value
let setPosition = (value) => {
  theSound.seek(value)
}

// you can also adjust the rate
// the value has to be between 0.5 and 4
let adjustRate = (value) => {
  theSound.rate(value)
}

// the fade() function changes the volume over time
// the first number is the volume at the beginning of the fade
// the second number is the volume at the end of the fade
// the third number is the time (in milliseconds) it takes to do that fade
let fadeSound = () => {
  theSound.fade(1.0, 0.0, 500.0)
}

// this should be quite self-explanatory :)
// it sets the stopLooping attribute of the sound to false
let stopLooping = () => {
  theSound.loop(false)
  console.log('set looping to false!');
}

// we can also attach event listeners to our sounds
// in this case, we can say that, once the sound has stopped fading
// it will call the function stopLooping()
// the ONCE event means it will happen once, and never again
theSound.once('fade', stopLooping)


// we can also define a ON event, which will always happen when the condition is complete
// in this case, we're printing something to the console when the sound is over
theSound.on('end', () => {
  console.log('and it\'s not getting better...');
})
