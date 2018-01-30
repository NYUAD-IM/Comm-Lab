//--------------------------------------------------------
// ALL THE THINGS YOU CAN DO WITH VIDEOS CAN BE FOUND HERE
// https://www.w3schools.com/TAgs/ref_av_dom.asp
//--------------------------------------------------------

window.addEventListener('load', () => {
  let theVideo = document.getElementById('vid');

  // theVideo.play();

  theVideo.ontimeupdate = () => {
    console.log('current time is: '+theVideo.currentTime);

    if(theVideo.currentTime > 7){
      theVideo.currentTime = 4.8;
      theVideo.play();
    }

  };

});
