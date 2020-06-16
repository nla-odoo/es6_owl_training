class Model{
	model(name){
		const id = Math.random().toString(36).substr(2, 9);
		const dataSet1 = {id: id, name: name};
		const localStorageDataSet = JSON.parse(localStorage.getItem('dataSet1')) || [];
		localStorageDataSet.push(dataSet1);
		localStorage.setItem('dataSet1', JSON.stringify(localStorageDataSet));
		const tableBody = document.querySelector('#tbody1');
		tableBody.innerHTML = "";
		localStorageDataSet.forEach((value) => {
			const tr = document.createElement('tr');
			const td = document.createElement('td');
			td.textContent = value.name;
			tr.append(td);
			tableBody.append(tr);
		})
	}
}