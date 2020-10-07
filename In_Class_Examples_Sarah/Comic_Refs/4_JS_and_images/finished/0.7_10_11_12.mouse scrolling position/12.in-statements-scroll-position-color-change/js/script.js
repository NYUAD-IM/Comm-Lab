function updateScrollPosition() {

  var x = window.scrollX;
  var y = window.scrollY;

  document.getElementById('scroll-x').innerHTML = x;
  document.getElementById('scroll-y').innerHTML = y;

  console.log( x + ", " + y );


  // x value changes approximately between 0 and 2500.
  // y value changes approximately between 0 and 2500 as well.
  // (they may be different based on the broswer's width and height.)
  // 2500 * 0.1 = 250
  // parseInt() discards floating point numbers.
  var colorR = parseInt( x * 0.1 ); // approx. 0 - 250
  var colorG = 0;
  var colorB = parseInt( y * 0.1 ); // approx. 0 - 250

  document.getElementById('really-large-div').style.backgroundColor
    = "rgb(" + colorR + "," + colorG + "," + colorB + ")";


  var paragraph = document.getElementById('content-center');
  if ( y < 500 ) {
    paragraph.innerHTML = "Content 1";
  } else if ( y >= 500 && y < 1000 ) {
    paragraph.innerHTML = "Content 2";
  } else if ( y >= 1000 && y < 1500 ) {
    paragraph.innerHTML = "Content 3";
  } else if ( y >= 1500 && y < 2000 ) {
    paragraph.innerHTML = "Content 4";
  } else {
    paragraph.innerHTML = "fin.";
  }

}
