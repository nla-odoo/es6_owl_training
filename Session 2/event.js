document.getElementById('myForm').addEventListener('submit', function(ev){
	ev.preventDefault();
	const name = this.querySelector('input').value;
	if (name=="") {
		alert("Cannot be Empty");
	} else{
		const m1 = new Model();
		m1.model(name);
		this.querySelector('input').value = "";
	}
	
});

document.getElementById("clearBtn").addEventListener("click", function(ev){
	localStorage.clear();
	location.reload();
});

