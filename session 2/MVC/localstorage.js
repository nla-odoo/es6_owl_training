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
		    button.id = value.id;
		    button.class = "delete";
            button.textContent = "Delete";
            button.onclick = 'delete(this)';
			td1.append(button)
			td1.addEventListener('click',(e) => {
				console.log("event>>>>",e);
				console.log("event>>>>",e.srcElement.type);
				if (e.srcElement.type =='submit')
				{
						var targeteButton= e.target.id;
						var m= new Model();
						data=m.dataDeleteModel(targeteButton);
						tbody.innerHTML='';
						model(data);

				}
			});

			tr.append(td);
			tr.append(td1);

			tableBody.append(tr);
		})
	}

	dataDeleteModel(dataSetId){
	    console.log('dataset id >>>>>',dataSetId)
        const localStorageDataSet = JSON.parse(localStorage.getItem('dataSet'))
        console.log('>>>>>>>>>',localStorageDataSet)
        localStorageDataSet.forEach((value) => {
            if(value.id == dataSetId){
                value.remove();
            }
        })
        console.log('afterdelete >>>>>>>',localStorageDataSet);
	}

	dataSetLoader(){
	    if(JSON.parse(localStorage.getItem('dataSet'))){
	        const localStorageDataSet = JSON.parse(localStorage.getItem('dataSet'));
	        const tableBody = document.querySelector('table tbody');
	        localStorageDataSet.forEach((value) => {
                const tr = document.createElement('tr');
                const td = document.createElement('td');
                const td1 = document.createElement('td');

                td.textContent = value.name;
                const button = document.createElement('button');
                button.id = value.id;
                button.class = "delete";
                button.textContent = "Delete";
                button.onclick = 'delete(this)';
                td1.append(button)
                td1.addEventListener('click',(e) => {
                    if (e.srcElement.type =='submit')
				    {
						var targeteButton= e.target.id;
						var m= new Model();
						data=m.dataDeleteModel(targeteButton);
						tbody.innerHTML='';
						model(data);

				    }
                });
                tr.append(td);
                tr.append(td1);

                tableBody.append(tr);
		    })
	    }
	}
}