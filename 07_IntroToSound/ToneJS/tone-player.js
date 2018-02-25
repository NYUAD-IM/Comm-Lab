let theSound = new Tone.Player('../technology.mp4').toMaster()


let playSound = () => {
  theSound.start();
}
