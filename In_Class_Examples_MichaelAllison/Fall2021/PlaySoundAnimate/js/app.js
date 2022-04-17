
//https://freesound.org/people/moogy73/sounds/425705/
//converted to 196kbps mp3 with https://online-audio-converter.com/

var woosh = new Howl({
  src: ['sounds/woosh.mp3'],
  html5: true
});

var big = true;

$(".item").click(function(){

  woosh.play();

  let params;

  if(big){
    params = {
      width: "100px",
      height: "100px",
      fontSize: "10px",
      borderWidth: "1px"
    };
    big = false;
  }
  else {
    params = {
      width: "500px",
      height: "500px",
      fontSize: "30px",
      borderWidth: "3px"
    };
    big = true;
  }

  $(".item").animate(params, 500);

});
