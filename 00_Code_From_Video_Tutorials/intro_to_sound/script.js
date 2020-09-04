let synth = new Tone.Synth().toMaster();

document.body.addEventListener('keypress', (event) => {
  if(event.key == 'w'){
    synth.triggerAttackRelease('C3', '4n')
    document.body.style.backgroundColor = "orange";
  }else if(event.key == 'e'){
    synth.triggerAttackRelease('C4', '4n')
    document.body.style.backgroundColor = "cyan";
  }else if(event.key == 'r'){
    synth.triggerAttackRelease('C5', '4n')
    document.body.style.backgroundColor = "pink";
  }
})





let interactable = document.getElementById("interactable")
let player = document.getElementById("player")

interactable.addEventListener('mouseenter', () => {
  player.play();
})

interactable.addEventListener('mouseleave', () => {
  player.pause();
})

player.addEventListener('pause', () => {
  document.body.style.backgroundColor = "white";
})

player.addEventListener('play', () => {
  document.body.style.backgroundColor = "black";
})

player.addEventListener('timeupdate', () => {
  console.log("the current time is:", player.currentTime)

  if(player.currentTime > 5){
    interactable.style.borderRadius = "30px";
  }
})
