//first we need to put all our code within an event listener that waits for all the html content to be loaded

let theVideo;

window.addEventListener('load', () =>{

										//then, we grab our video element from the DOM
										theVideo = document.getElementById("prophecy");
										console.log(theVideo);

										//first event listener: it fires whenever the playback position of the video changes
										theVideo.ontimeupdate = () =>{
											//we write the current time of our video, by accessing the currentTime video
											console.log("duration", theVideo.currentTime);

											//if we're past a certain point, we display something to the webpage!
											if(theVideo.currentTime >= 3.5){
												document.getElementById("reaction").innerText = "WHAT ABOUT TECHNOLOGY";
											}

											if(theVideo.currentTime > 1.5){
												document.getElementById("youtubestuff").style.display = "block";
											}

										};

										//and we add another event listener when the video has finished playing
										theVideo.onended = () =>{
											theVideo.src = 'media/albloom.mp4';
											theVideo.play(); //this resets the playback position
										};
});

//and we play it!
playVideo = () =>{
	theVideo.play();
}
