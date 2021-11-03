var drums = document.getElementById("drums");
var interactive = document.getElementById("interactive");
var intro = document.getElementById("intro");

intro.addEventListener('click', function() {
  intro.style.display = "none";
});

interactive.addEventListener('mouseenter', () => {

  drums.play();
  document.body.style.backgroundColor = "salmon";

});

interactive.addEventListener('mouseleave', () => {

  drums.pause();
  document.body.style.backgroundColor = "white";

});

const autoWah = new Tone.AutoWah(50, 6, -30).toDestination();
autoWah.Q.value = 6;
const synth = new Tone.Synth().connect(autoWah);

document.body.addEventListener('keydown', function(event){
  if(event.key == 'f')
  {
      synth.triggerAttackRelease("C4", "4n");
      document.body.style.backgroundColor = "orange";
  }
  else if(event.key == 'g')
  {
    synth.triggerAttackRelease("E4", "4n");
    document.body.style.backgroundColor = "cyan";
  }
  else if(event.key == 'h')
  {
    synth.triggerAttackRelease("G4", "4n");
    document.body.style.backgroundColor = "pink";
  }
});
