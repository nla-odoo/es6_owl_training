class table{
	table(name){
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
			const del = document.createElement('button');
			del.innerHTML = "Delete";
			td.textContent = value.name;
			tr.append(td);
			tr.append(del);
			tableBody.append(tr);
			del.addEventListener('click', (ev) => {
				ev.preventDefault();
				tr.remove();
			});
		});
	}
}
