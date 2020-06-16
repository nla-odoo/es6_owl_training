function inputFocus(focusarea) {
  focusarea.style.background = "red";
}

function blurEvent() {
  var inputData = document.getElementById("name");
  inputData.value = inputData.value.toUpperCase();
}

function preferedFruit() {
  prefer = document.forms[0].fruit.value;
  console.log("you like to prefer " + prefer);
}

function confirmInput() {
  value = document.forms[0].fruit.value;
  alert("Hello " + value);
}

//keyboard event function

function keydown() {
  console.log("You pressed a key inside the input field");
}

function keypress() {
  console.log("You pressed a key inside the input field");
}

function keyup() {
  var keyElements = document.getElementById("fname");
  keyElements.value = keyElements.value.toUpperCase();
}

//mouse event function
function mousemove(e) {
  x = e.clientX;
  y = e.clientY;
  coord = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coord
}

function clearCoord() {
  document.getElementById("demo").innerHTML = "";
}

function mouseclickhold(elmnt, clr) {
  elmnt.style.color = clr;
}
