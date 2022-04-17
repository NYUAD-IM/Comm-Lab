let rainVid = document.getElementById('rain-vid');
let cloudVid = document.getElementById('cloud-vid');

let start = document.getElementById('start');
start.addEventListener('click', startVideos);

rainVid.addEventListener('mouseover', focusRain);
cloudVid.addEventListener('mouseover', focusCloud);

function startVideos(){
	start.style.animation = 'fade 1s forwards';

	rainVid.play();
	cloudVid.play();
}

function focusRain(){
	cloudVid.pause();

	if(rainVid.paused){
		rainVid.play();
	}
}

function focusCloud(){
	rainVid.pause();

	if(cloudVid.paused){
		cloudVid.play();
	}
}