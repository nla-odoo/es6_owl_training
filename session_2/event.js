document.getElementById("btn").addEventListener("click", (ev) => {
	ev.preventDefault();
	const name = document.querySelector('input').value;
	const data = new table();
	data.table(name);
});