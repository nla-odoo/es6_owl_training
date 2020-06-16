class Model{

	Save_Data(text_box)
	{
		var uuid= create_UUID();
		localStorage.setItem(uuid, text_box);
		var data=allStorage()
		return data;
	}

	delete_data(uuid)
	{	
		localStorage.removeItem(uuid);
		var data=allStorage()
		return data;
	}

    get_data()
    {
        var data=allStorage()
        return data;
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



function allStorage() {

    var archive = {}, 
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        archive[ keys[i] ] = localStorage.getItem( keys[i] );
    }

    return archive;
}
