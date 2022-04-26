let vid = document.getElementById('rain-vid');

let play = document.getElementById('play');
let pause = document.getElementById('pause');
let stop = document.getElementById('stop');

play.addEventListener('click', playVideo);
pause.addEventListener('click', pauseVideo);
stop.addEventListener('click', stopVideo);

function playVideo(){
	vid.play();
}

function pauseVideo(){
	vid.pause();
	console.log("Current time: " + vid.currentTime);
}

function stopVideo(){
	vid.pause();
	vid.currentTime = 0;
}
