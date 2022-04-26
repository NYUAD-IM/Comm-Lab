let vid = document.getElementById('rain-vid');
let source = document.getElementById('vid-source')

let play = document.getElementById('play');
let pause = document.getElementById('pause');
let stop = document.getElementById('stop');

play.addEventListener('click', playVideo);
pause.addEventListener('click', pauseVideo);
stop.addEventListener('click', stopVideo);

let videos = [];
let currentVid = 0;

for(let i = 1; i < 7; i++){
	videos.push('video/' + i + '.mp4');
}

setInterval(nextVideo, 3000);

//setTimeout(nextVideo, 3000);

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

	//setTimeout(nextVideo, 3000);
}