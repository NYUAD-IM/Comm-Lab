let theAudioElement

function init() {
  theAudioElement = document.getElementById('theAudio')
  theAudioElement.play()

  theAudioElement.addEventListener('ended', function(){

    //this is where we see things in the console
    console.log('this is over')

    //change the file that we will play
    // properties (JS) -- attributes (HTML)
    theAudioElement.setAttribute('src', 'other.mp3')

    ///play the new file

    setTimeout(function() {
      theAudioElement.play()
    }, 2000)


  })

}
