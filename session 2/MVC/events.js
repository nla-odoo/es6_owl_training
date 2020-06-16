document.getElementById('myForm').addEventListener('submit', function (ev) {
	ev.preventDefault();
	const name = this.querySelector('input').value;
	const m1 = new Model();
	m1.model(name);
})

document.addEventListener("DOMContentLoaded", () => {
    var domeRender= new Model();
    domeRender.dataSetLoader();

  });
