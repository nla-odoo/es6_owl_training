document.getElementById('myForm').addEventListener('submit', function (ev) {
	ev.preventDefault();
	const name = this.querySelector('input').value;
	const m1 = new Model();
	m1.model(name);
});

/*MouseDown*/
document.getElementById('mousedown').addEventListener('mousedown', (ev) => {
	ev.preventDefault();
	document.getElementById("mousedown").style.color = "red";
});

/*MouseUp*/
document.getElementById('mousedown').addEventListener('mouseup', (ev) => {
	ev.preventDefault();
	document.getElementById("mousedown").style.color = "green";
});

/*MouseOver*/
document.getElementById('mousedown').addEventListener('mouseover', (ev) => {
	ev.preventDefault();
	document.getElementById("mousedown").style.fontSize = "26px";
});

/*MouseOut*/
document.getElementById('mousedown').addEventListener('mouseout', (ev) => {
	ev.preventDefault();
	document.getElementById("mousedown").style.fontSize = "20px";
});

/*Keydown*/
document.getElementById('fname').addEventListener('keydown', (ev) => {
	document.getElementById("fname").style.backgroundColor = "AliceBlue";
});

/*Keyup*/
document.getElementById('fname').addEventListener('keyup', (ev) => {
	document.getElementById("fname").style.borderColor = "purple";
});

/*change*/
document.getElementById('select').addEventListener('change', (ev) => {
	alert("You have changed Selection");
});

/*focus*/
document.getElementById('select').addEventListener('focus', (ev) => {
	document.getElementById("select").style.backgroundColor = "thistle";
});

/*Dbclick*/
document.getElementById('dbclick').addEventListener('dblclick', (ev) => {
	document.getElementById("dbclick").innerHTML = "Show the Result";
});

/*Blur*/
document.getElementById('submit').addEventListener("blur", (ev) => {
   ev.preventDefault();
   document.getElementById("submit").style.backgroundColor = "blue";
});
