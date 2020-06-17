class Model{
	model(name){
		const id = Math.random().toString(36).substr(2, 9);
		let dataSet = {id: id, name: name};
		const localStorageDataSet = JSON.parse(localStorage.getItem('dataSet')) || [];
		localStorageDataSet.push(dataSet);
		localStorage.setItem('dataSet', JSON.stringify(localStorageDataSet));
		const tableBody = document.querySelector('table tbody');
		tableBody.innerHTML = "";
		localStorageDataSet.forEach((value) => {
			const tr = document.createElement('tr');
			const td = document.createElement('td');
			const button = document.createElement('button');
			td.textContent = value.name;
			tr.append(td, button);
			tableBody.append(tr);
			button.setAttribute("id", value.id);
			button.innerHTML = "Delete";
			button.addEventListener('click', (data) => {
				dataSet = JSON.parse(localStorage.getItem('dataSet')) || [];
				let id = value.id;
				dataSet = dataSet.filter((val) => val.id !== id);
				localStorage.setItem('dataSet', JSON.stringify(dataSet));
				tr.remove();
			}); 
		})
	}
}