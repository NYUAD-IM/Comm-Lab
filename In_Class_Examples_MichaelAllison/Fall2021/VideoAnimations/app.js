
var container = document.querySelector(".container");
var front = document.querySelector(".front");
var vid = document.querySelector(".back video");

front.addEventListener('click', function(){
  vid.play();
  container.classList.add("animate-container");
});

vid.addEventListener('click', function(){
  vid.pause();
  container.classList.remove("animate-container");
  container.classList.add("animate-container-back");
  front.innerHTML = "Sorry about that. :)"
});
