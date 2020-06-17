class TableModel{
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
            debugger;
            const td = document.createElement('td');
            td.textContent = value.name;
            tr.append(td);
            tableBody.append(tr);
            if (value.name) {
                const del = document.createElement('button');
                del.setAttribute('id', value.id);
                del.textContent = 'Delete';
                td.append(del);
                del.addEventListener('click', function (ev) {
                    ev.preventDefault();
                    let key = del.id;
                    JSON.parse(localStorage.getItem('dataSet'));
                    let dataSet = localStorageDataSet.filter((record) => record.id !== key);
                    localStorage.setItem('dataSet', JSON.stringify(localStorageDataSet));
                    tr.remove();
                })
            }
        })

    }
}