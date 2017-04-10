$(document).ready(function(){
	console.log("We are ready");

	/*************************/
	//Initialize some variables
	/*************************/

	//Set the video link
	var theVideoLink = "https://www.youtube.com/watch?v=QVn7PzNoVqE&controls=1";
	var theVideoLinkTwo ='https://www.youtube.com/watch?v=ApN1cZoiX4w&controls=1';

	//Set the page element
	var theElement = "#video";
	var theElementTwo = "videoTwo";
	//Create the Popcorn video object
	var myVideo = Popcorn.smart(theElement, theVideoLink);
	var myVideoTwo = Popcorn.smart(theElementTwo, theVideoLinkTwo);

	/*******************/
	//Trigger some events
	/*******************/

	//Automatically play the video
	myVideo.autoplay(true);

	//Use 'cue' to make an event happen at a specific time in the video
	myVideo.cue(1,function(){
		$('body').append('<div class="specialBox"></div>');
	});

	myVideo.cue(5, function(){
		myVideo.pause();
		myVideoTwo.currentTime(20);
		myVideoTwo.play();
	});

	myVideo.cue(10, function(){
		$('#info').html(' ');
	});

	//Use 'code' to make a events happen at a start and end time
	myVideo.code({
		start: 4,
		end: 7,
		onStart: function(){
			$('#info').html('???');
		},
		onEnd: function(){
			$('#info').html('Having fun yet???');
		}
	});

	myVideo.on("play", function(){
		$('body').append("<div class='playDiv'>PLAY!PLAY!PLAY!</div>");
	});
	myVideo.on("pause", function(){
		$('body').append("<div class='pauseDiv'>PAUSE!PAUSE!PAUSE!</div>");
	});
	myVideo.on("timeupdate", function(){
		//console.log(myVideo.currentTime());
		$('body').append("<div class='updatingDiv'>UPDATING!UPDATING!UPDATING</div>");
	});

	/*******************************/
	//Set some button event listeners
	/*******************************/

	//Using jQuery to set 'onclick' event listeners

	$('#playButton').click(function(){
		//Trigger the video to play
		myVideo.play();
	});
	$('#pauseButton').click(function(){
		//Trigger the video to pause
		myVideo.pause();
	});
	$('#jumpButton').click(function(){
		//Get the current video timestamp in seconds using Popcorn's 'currentTime'
		var thePresent = myVideo.currentTime();
		//Add 10 seconds to the timestamp var
		var theFuture = thePresent + 10;
		//Update the current video timestamp 
		//Use Popcorn's currentTime' method with a single number argument
		myVideo.currentTime(theFuture);
		//Trigger the video to play
		myVideo.play();
	});
});