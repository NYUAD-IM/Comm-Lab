var iframe = document.querySelector('iframe');

var buttonVol = document.getElementById("playerVolume");
buttonVol.addEventListener("click", turnVolume);

var player = new Vimeo.Player(iframe);

var volumeOn = false;


console.log(player);

function turnVolume() {
	if (volumeOn==false) {
		player.setVolume(.6);
		volumeOn = true;
		buttonVol.innerHTML = "Volume Off";
		//player.pause();
	} else {
		player.setVolume(0);
		volumeOn = false;
		buttonVol.innerHTML = "Volume On";
		//player.play();
	}

}


