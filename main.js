var color1 = document.getElementsByClassName('colors')[0];
var color2 = document.getElementsByClassName('colors')[1];
var color3 = document.getElementsByClassName('colors')[2];

var mainLoop = setInterval(function () {
  color1.style.background = "red";
  color2.style.background = "white";
  color3.style.background = "white";

  var loopYellow = setTimeout(function () {
    color2.style.background = "yellow";
  },2000)
  var loopGreen = setTimeout(function () {
    color1.style.background = "white";
    color2.style.background = "white";
    color3.style.background = "green";
  },4000)

},7000);
