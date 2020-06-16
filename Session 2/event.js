document.getElementById('myForm').addEventListener('submit', function(ev){
	ev.preventDefault();
	const name = this.querySelector('input').value;
	const m1 = new Model();
	m1.model(name);
	this.querySelector('input').value = "";
});

document.getElementById("clearBtn").addEventListener("click", function(ev){
	localStorage.clear();
});