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
			const del = document.createElement('button');
			del.innerHTML = "Delete";
			td.textContent = value.name;
			tr.append(td);
			tr.append(del);
			tableBody.append(tr);
			

			del.addEventListener("click", (ev) => {
				ev.preventDefault();
				var id = value.id;
				var name = value.name;
				console.log(id);
				var localStorageDataSet = JSON.parse(localStorage.getItem('dataSet1'))
				console.log('>>>>>>>>>',localStorageDataSet)
				localStorageDataSet = localStorageDataSet.filter((record) => record.id !== id);
				localStorage.setItem('dataSet1', JSON.stringify(localStorageDataSet));
				location.reload();

			});

		});
	}
}