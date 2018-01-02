let video;
let slider;

setup = () =>{
	// first we create our canvas
	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	canvas.id('p5canvas');

	//then we create our video element by calling createVideo()
	//the first argument is the path to our video
	//and the second one is the callback function -i.e. what should we do once we've loaded?
	video = createVideo('media/drone.mp4',  () =>{
		console.log("Video is loaded!");
		//in our case, we want to call initSerious(), which is defined below!
		initSerious();
  });
}

initSerious = () =>{
	//so the first thing is setting the size of the video -to the size of the browser window
	video.size(windowWidth, windowHeight);
	video.id('p5video');

	//then we play the video, and we set it to loop
	video.play();
	video.loop();

	//then we hide the actual video -it's a little counter-intuitive
	//but that's because we will display each frame of the video on the canvas element
	video.hide();

	//then we create a new slider with the id 'blur-slider', which will be used to blur our video
	slider = createSlider(0, 1, 0.5, 0.01);
	slider.id('blur-slider');

	//then we get into the library part
	//which allows us to do chromakeying with two videos
	let seriously = new Seriously();

	//we need to set what is our source video and our target video
	//so that we take an input from our video with the id p5video
	//and we output the processed result to the canvas with the id p5canvas
	let src = seriously.source('#p5video');
	let target = seriously.target('#p5canvas');

	//then we set them to be able to be blurred, by calling seriously.effect('blur')
	let blur = seriously.effect('blur');
	blur.amount = '#blur-slider';
	blur.source = src;
	target.source = blur;

	//we also give it a chromakey effect
	let chroma = seriously.effect('chroma');
	chroma.source = src;
	target.source = chroma;

	//and for that we need to specify what amount of red, green and blue
	//we want to take out
	let r = 70 / 255;
	let g = 183 / 255;
	let b = 82 / 255;
	chroma.screen = [r,g,b,1];

	//seriously, let's go
	seriously.go();
}

//basic helper function which allows us to toggle the background of our page
let toggle = true;
mousePressed = () => {
	background(255);
	if(toggle){
		$('canvas').css('background-color','white');
	}
	else{
		$('canvas').css('background-color','pink');
	}
	toggle = !toggle;
}
