function initPopcornVideo(){

	//First, declare a variable that is the URL of the video
	var theVideoLink = 'https://www.youtube.com/watch?v=Wb6eFGbwPeA&controls=1';

	//Then declare a variable for the Popcorn object.
	//Need to include the element ID and the link as variables
	var popcornVideo = Popcorn.smart( "#video", theVideoLink );

	//Set Events using Popcorn's Media Methods

	//Trigger the video to automatically start playing
	popcornVideo.autoplay(true);

	//Ppopcorn's 'cue' method lets you trigger a function at a specific time
	//Requires the time and the callback function as arguments

	//Do something at time :5
	popcornVideo.cue(5, function() {
		console.log("We reached second 5");
	});

	//Popcorn's 'on' method lets you trigger a function based on specific video events

	//Do something whenever the time of the video updates
	popcornVideo.on('timeupdate', function(){
		$('#animation').append("<div class='greenBox'></div>");
	});

	//Do something whenever the play button is clicked
	popcornVideo.on('play', function(){
		console.log('Playing at: ' + popcornVideo.currentTime());
	});

	//Do something whenever the pause button is clicked
	popcornVideo.on('pause',function(){
		console.log("Paused at: " + popcornVideo.currentTime());
		$('#animation').append("<div class='redBox'></div>");
	});

	popcornVideo.code({
		start: 4,
		end: 10,
		onStart: function( options ) {
			console.log(options);
			$('#infoBox').css({'color':'white', 'background-color': 'purple'});
			$('#infoBox').html("Want to know more?");
		},
		onEnd: function( options ) {
			$('#infoBox').html("Click <a href='http://tisch.nyu.edu/itp'>HERE</a> to read more about NYU's ITP!");
		}
	});
}

$(document).ready(function(){
	initPopcornVideo();
});
