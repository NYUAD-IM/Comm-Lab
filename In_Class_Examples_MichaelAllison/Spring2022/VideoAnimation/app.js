var front = document.querySelector(".front");
var container = document.querySelector(".container");
var video = document.querySelector(".back video");
var choices = document.querySelector(".choices");
var continueButton = document.querySelector("#continue");
var skipButton = document.querySelector("#skipToEnd");

var shownChoices = false;

video.addEventListener('timeupdate', function(){
  if(video.currentTime > 5 && !shownChoices)
  {
    video.pause();
    choices.style.visibility = "visible";
    shownChoices = true;
  }
});

continueButton.addEventListener('click', function(){
  video.play();
  choices.style.visibility = "hidden";
});

skipButton.addEventListener('click', function(){
  choices.style.visibility = "hidden";
  video.currentTime = 210;
  video.play();
});

container.addEventListener('click', function(){
  if(!container.classList.contains("anim")){
    container.classList.add("anim");
    video.play();
  }
});

video.addEventListener('ended', function(){
  container.classList.remove("anim");
  shownChoices = false;
});
