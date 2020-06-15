document.getElementById('myForm').addEventListener('submit', function (ev) {
	// debugger;
	ev.preventDefault();
	const name = this.querySelector('input').value;
	const m1 = new Model();
	console.log("sssssss", m1);
	m1.model(name); 
	console.log("aaaaaaaa", m1);
	// btn = document.getElementsByTagName("Delete")
	// console.log("buttonnnnnnnnnnnnnn", btn);
	// window.localStorage.clear();
	// btn.attributes.getNamedItem("onclick").value;
	// console.log("QQQQQQQQQQQQQQQQ", btn);
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

/*blur*/
// document.getElementById('noContextMenu').addEventListener("blur", (ev) => {
//    ev.preventDefault();
//    document.getElementById("noContextMenu").style.background = "lightblue";
// });

// document.getElementById('fname').addEventListener('keypress', (ev) => {
// 	ev.preventDefault();
// 	document.getElementById("fname").style.color = "red";
// });



// document.getElementsByTagName("Delete").addEventListener('click', function (ev) {
// 	// window.localStorage.clear();
// 	console.log("QQQQQQQQQQQQQQQQ");
// 	ev.preventDefault();
// 	const name = this.querySelector('input').value;
// 	const m1 = new Model();
// 	m1.model(name); 
// })
// document.getElementById('table').addEventListener('', function (ev) {
// 	ev.preventDefault();
// 	const name = this.querySelector('input').value;
// 	const m1 = new Model();
// 	m1.model(name); 
// })