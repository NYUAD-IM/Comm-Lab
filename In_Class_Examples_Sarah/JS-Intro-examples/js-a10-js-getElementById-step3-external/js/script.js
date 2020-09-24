/**

_____
CSS properties to JS styling

- Change the property name to Camel case
  https://en.wikipedia.org/wiki/Camel_case
- Add double quotation marks to the property's value.
- Must add CSS units, such as %, px, em, etc.
  https://www.w3schools.com/cssref/css_units.asp


_____
Examples

CSS: background-color: white;
JS:  .style.backgroundColor = "white";

CSS: font-weight: bold;
JS:  .style.fontWeight = "bold";

CSS: margin: 10px 0 0 10px;
JS:  .style.margin = "10px 0 0 10px";

**/


document.getElementById('title1').innerHTML = "Comm Lab";
document.getElementById('title1').style.color = "white";
document.getElementById('title1').style.backgroundColor = "rgb(255,0,0)";
document.getElementById('title1').style.fontSize = "40px";

document.getElementById('info1').innerHTML = "Intro to JavsScript";
document.getElementById('info1').style.color = "#FFF";
document.getElementById('info1').style.fontStyle = "Italic";
