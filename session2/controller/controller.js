
document.querySelector(".btn").addEventListener("click",(e) =>
	{
		e.preventDefault();
		var text_box = document.querySelector('#text_box').value;
		var m= new Model();
		var data=m.Save_Data(text_box);
		var tbody=  document.querySelector(".table #tbody");
		tbody.innerHTML='';

		create_table(data);



	});

document.addEventListener("DOMContentLoaded", () => {
    var m= new Model();
    data=m.get_data();
    create_table(data);

  });

function create_table(data) {


	Object.keys(data).forEach(function(element){
/*			console.log(data[element].id);
*/
			var tr= document.createElement("tr");
			var td = document.createElement("td");
			var td2 = document.createElement("td");
			var btn_html =" <button type='submit' id='"+data[element].id+"' class='btn Delete btn-success btn-sm btn-default'>Delete</button>";
			
			td2.addEventListener('click',(e) => {
			

				if (e.srcElement.type =='submit')
				{
						var btn=e.srcElement;
						var uuid=btn.id;
						var m= new Model();

						data=m.delete_data(uuid);
						tbody.innerHTML='';
						create_table(data);

						


				}
			});

			td2.innerHTML=btn_html;
			td.append(data[element].name);
			tr.append(td);
			tr.append(td2);
			tbody.append(tr);

			});
		
}