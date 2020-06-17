class Model{

	Save_Data(text_box)
	{
		var uuid= create_UUID();


        const dataSet = {id: uuid, name: text_box};
        const localStorageDataSet = JSON.parse(localStorage.getItem('dataSet')) || [];
        localStorageDataSet.push(dataSet);
        localStorage.setItem('dataSet', JSON.stringify(localStorageDataSet));
        return localStorageDataSet ;

	}

	delete_data(uuid)
	{	
		var dataSet=localStorage.getItem('dataSet');
        dataSet=JSON.parse(dataSet);
        dataSet=dataSet.filter((record) => record.id !==uuid)
        localStorage.setItem("dataSet",  JSON.stringify(dataSet));
        return dataSet;
	}

    get_data()
    {
        const localStorageDataSet = JSON.parse(localStorage.getItem('dataSet')) || [];
        return localStorageDataSet;
    }

}


function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

/*

function allStorage() {

    var archive = {}, 
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        archive[ keys[i] ] = localStorage.getItem( keys[i] );
    }

    return archive;
}*/
