var theAudio = document.getElementById('theaudio');
var theButton = document.getElementById('sound');

theButton.addEventListener('click', function(){
	if (theAudio.paused){
		theAudio.play();
	}
	else{
		theAudio.pause();
		theAudio.currentTime = 0;
	}
});


/*
//Using a boolean to manage the play/pause
var isPlaying = false;
theButton.addEventListener('click', function(){
	if (isPlaying){
		theAudio.pause();
		theAudio.currentTime = 0;
	}
	else{
		theAudio.play();
	}
	isPlaying = !isPlaying;
});
*/

/*
//Using jQuery
$('#sound').click(function(){
	var audio = $('#theaudio')[0];
	if (audio.paused){
		audio.play();
	}
	else{
		audio.pause();
		audio.currentTime = 0;
	}
});
*/

