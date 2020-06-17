document.getElementById('myForm').addEventListener('submit', function (ev) {
	ev.preventDefault();
	const name = this.querySelector('input').value;
	const m1 = new Model();
	m1.model(name); 
});

window.addEventListener('load', (event) => {
  window.localStorage.clear();
});

/*mouseover*/
document.getElementById('mousedown').addEventListener('mouseover', (ev) => {
	ev.preventDefault();
	document.getElementById("mousedown").style.color = "red";
});
/*mousedown*/
document.getElementById('mousedown').addEventListener('mousedown', (ev) => {
	ev.preventDefault();
	document.getElementById("mousedown").style.color = "orange";
});
/*dblclick*/
document.getElementById('mousedown').addEventListener('dblclick', (ev) => {
	ev.preventDefault();
	document.getElementById("mousedown").style.color = "green";
});

/*contextmenu*/
document.getElementById('noContextMenu').addEventListener('contextmenu', e => {
	e.preventDefault();
});

/*keydown*/
document.getElementById('fname').addEventListener('keydown', (ev) => {
document.getElementById("fname").style.backgroundColor = "AliceBlue";
});

/*Keyup*/
document.getElementById('fname').addEventListener('keyup', (ev) => {
document.getElementById("fname").style.borderColor = "purple";
});
