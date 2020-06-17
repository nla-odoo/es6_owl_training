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
		   button.setAttribute('id', value.id);
		   button.innerHTML = "Delete"
		   td.textContent = value.name;
		   tr.append(td, button);
		   tableBody.append(tr);
		   button.addEventListener('click', (ev) => {
		       ev.preventDefault();
		       dataSet = JSON.parse(localStorage.getItem('dataSet')) || [];
		       let key = button.id;
		       dataSet = dataSet.filter((record) => record.id !== key);
		       localStorage.setItem('dataSet', JSON.stringify(dataSet));
		       tr.remove();
	       })
	   })
	}
}
