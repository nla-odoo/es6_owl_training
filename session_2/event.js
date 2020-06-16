document.getElementById("btn").addEventListener("click", (ev) => {
	ev.preventDefault();
	const name = document.querySelector('input').value;
	const data = new table();
	data.table(name);
});

document.getElementById("dblclick").addEventListener("dblclick", (ev) => {
	ev.preventDefault();
	alert("you twiclly click mouse button");
});

document.getElementById("test").addEventListener("mouseover", (ev) => {
	ev.preventDefault();
	document.getElementById("show").innerHTML = "MouseOver Event"
})

document.getElementById("test").addEventListener("mouseout", (ev) => {
	ev.preventDefault();
	document.getElementById("show").innerHTML = "MouseOut Event"
})

document.getElementById("test").addEventListener("mousedown", (ev) => {
	ev.preventDefault();
	document.getElementById("show").style.backgroundColor  = "green";
})

document.getElementById("test").addEventListener("mouseup", (ev) => {
	ev.preventDefault();
	document.getElementById("show").style.backgroundColor = "yellow";
})

document.getElementById("test").addEventListener("mousemove", (ev) => {
	ev.preventDefault();
	var x = ev.clientX;
	var coor = "Coordinates:" + x;
	document.getElementById("coor").innerHTML = coor;
})

document.getElementById("test").addEventListener("mousewheel", (ev) => {
	ev.preventDefault();
	document.getElementById("show").style.color = "red";
})

document.getElementById("kboard").addEventListener("keydown", (ev) => {
	ev.preventDefault();
	document.getElementById("kboard").style.backgroundColor = "red";
})

document.getElementById("kboard").addEventListener("keyup", (ev) => {
	ev.preventDefault();
	document.getElementById("kboard").style.backgroundColor = "yellow";
})
