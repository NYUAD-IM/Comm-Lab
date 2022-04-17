let vid = document.getElementById('rain-vid');
let source = document.getElementById('vid-source')

let play = document.getElementById('play');
let pause = document.getElementById('pause');
let stop = document.getElementById('stop');
//let next = document.getElementById('next');

play.addEventListener('click', playVideo);
pause.addEventListener('click', pauseVideo);
stop.addEventListener('click', stopVideo);
//next.addEventListener('click', nextVideo);

vid.addEventListener('ended', nextVideo);

let videos = [];
let currentVid = 0;

for(let i = 1; i < 4; i++){
	videos.push('video/rain_' + i + '.mp4');
}

function playVideo(){
	vid.play();
}

function pauseVideo(){
	vid.pause();
}

function stopVideo(){
	vid.pause();
	vid.currentTime = 0;
}

function nextVideo(){
	currentVid++;

	if(currentVid >= videos.length){
		currentVid = 0;
	}

	source.src = videos[currentVid];

	vid.load();
	vid.play();
}
