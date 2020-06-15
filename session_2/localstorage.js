class Model{
	model(name){
		const id = Math.random().toString(36).substr(2, 9);
		const dataSet = {id: id, name: name};
		const localStorageDataSet = JSON.parse(localStorage.getItem('dataSet')) || [];
		localStorageDataSet.push(dataSet);
		localStorage.setItem('dataSet', JSON.stringify(localStorageDataSet));
		const tableBody = document.querySelector('table tbody');
		tableBody.innerHTML = "";
		localStorageDataSet.forEach((value) => {
			const tr = document.createElement('tr');
			const td = document.createElement('td');
			const btndel = document.createElement('button');
			td.textContent = value.name;
			btndel.innerHTML = "Delete";
			tr.append(td);
			tr.append(td, btndel);
			tableBody.append(tr);
			btndel.addEventListener("click", (ev) => {
				ev.preventDefault();
				tr.remove();
				// window.localStorage.clear();
			})
		})
	}
}