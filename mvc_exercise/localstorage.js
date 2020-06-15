class Model{
	model(name){
		// debugger;
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
			const button = document.createElement('button');
			td.textContent = value.name;
			tr.append(td, button);
			tableBody.append(tr);
			// button.id = "delete";
			button.innerHTML = "Delete";
			button.addEventListener('click', (data) => {
				debugger;
				data.preventDefault();
				console.log("3333333333",data);
				const localStorageDataSet = JSON.parse(localStorage.getItem('dataSet'));
				localStorageDataSet.forEach((storage) => {
					if (storage.id == value.id) {
						localStorage.removeItem(storage);
						console.log("aaaaaaaaaaaaa", value);
					}
				});
				// let i = data.srcElement.parentNode.id - 1;
				// // var key = localStorage.key(i);
				// // localStorage.pop(key);
				// // document.getElementById("table").deleteRow(i);
				// name = value.name;
				// console.log("dddddddddddd", name);

				// localStorage.removeItem(value);

			}); 
			// tableBody.append(button);
		})
	}
}