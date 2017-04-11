//first we need to put all our code within an event listener that waits for all the html content to be loaded

var theVideo;
window.addEventListener('load', function(){

	//then, we grab our video element from the DOM
	theVideo = document.getElementById("prophecy");
	console.log(theVideo);

	//first event listener: it fires whenever the playback position of the video changes
	theVideo.ontimeupdate = function(){

		//we write the current time of our video, by accessing the currentTime video
		console.log("duration", theVideo.currentTime);

		//if we're past a certain point, we display something to the webpage!
		if(theVideo.currentTime >= 3.5)
			document.getElementById("reaction").innerText = "WHAT ABOUT TECHNOLOGY";
	};

	//and we add another event listener when the video has finished playing
	theVideo.onended = function(){
		theVideo.src = 'media/albloom.mp4';
		theVideo.play();
		theVideo.loop = true;
	};
});

//and we play it!
function playVideo(){
	theVideo.play();
}
