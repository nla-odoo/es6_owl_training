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
			const td1 = document.createElement('td');

			td.textContent = value.name;
			const button = document.createElement('button');
//		    button.id = value.id;
		    button.id = "delete"    ;
            button.textContent = "Delete";
            button.onclick = 'delete(this)';
			td1.append(button)

			tr.append(td);
			tr.append(td1);

			tableBody.append(tr);
		})
	}

	dataSetModel(dataSetId){
        const localStorageDataSet = JSON.parse(localStorage.getItem('dataSet'))
        console.log('>>>>>>>>>',localStorageDataSet)
        localStorageDataSet.forEach((value) => {
            if(value.id == dataSetId){
//                localStorageDataSet.delete(value);
            }


        })
        console.log('afterdelete >>>>>>>',localStorageDataSet);
	}
}