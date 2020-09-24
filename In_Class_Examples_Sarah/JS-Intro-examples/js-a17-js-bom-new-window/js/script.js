/*

https://www.w3schools.com/jsref/met_win_open.asp

_____
name

_blank - URL is loaded into a new window. This is default
_parent - URL is loaded into the parent frame
_self - URL replaces the current page
_top - URL replaces any framesets that may be loaded
name - The name of the window (Note: the name does not specify the title of the new window)

*/


function openNewWindow() {

  // window.open(URL, name, specs);
  window.open("http://ima.nyu.sh/communications-lab/", "_blank", "width=600,height=800");

}
