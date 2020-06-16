document.getElementById('myForm').addEventListener('submit', function (ev) {
	ev.preventDefault();
	const name = this.querySelector('input').value;
	const lname = this.querySelector('input').value;
	const m1 = new Model();
	m1.model(name);
})

document.getElementById('delete').addEventListener('click',function(ev){
    console.log('evvv>>>>',ev);
    const targetButtonId = ev.target.id
    console.log('>>>>>>>>>',targetButtonId)
    const ModelDataSet = new Model();
	ModelDataSet.dataSetModel(targetButtonId);
//	var row = ev.parentNode.parentNode;
//    row.parentNode.removeChild(row);
});

//function deleteRow(r) {
//  var i = r.parentNode.parentNode.rowIndex;
//  document.getElementById("myTable").deleteRow(i);
//}