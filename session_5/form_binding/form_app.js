function app()
{
const { Component, Store } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useState, useRef, useDispatch, useStore } = owl.hooks;


		class Form extends owl.Component
		{
			static template = xml`
			<div>
      		<div class="row">
        	<div t-name="Form">
          	<h1>Form Binding</h1>
          	<div style='margin-top:10px'>
            immediate Text: <input t-model="state.text"/>
          	</div>
          	<div style='margin-top:10px'>
            lazy text : <input t-model.lazy="state.othertext"/>
          	</div>
          	<div style='margin-top:10px'>
            given number: <input type="number" t-model.number="state.number"/>
          	</div>
          	<div style='margin-top:10px'>
            boolean: <input  type="checkbox" t-model="state.bool"/>
          	</div>
          	<div style='margin-top:10px'>
            Color selection:
            <select  t-model="state.color">
              <option value="">Select a color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
            </select>
          	</div>
          	<div style='margin-top:10px'>
            radio buttons:
            	<span><input type="radio" name="color" id="red" value="red" t-model="state.color"/><label for="red">Red</label></span>
            	<span><input type="radio" name="color" id="blue" value="blue" t-model="state.color"/><label for="blue">Blue</label></span>
          	</div>
         	<hr/>
          	<h1>changes</h1>
          	<div style='margin-top:5px'>Text: <t t-esc="state.text"/></div>
          	<div style='margin-top:5px'>Other Text: <t t-esc="state.othertext"/></div>
          	<div style='margin-top:5px'>Number: <t t-esc="state.number"/></div>
          	<div style='margin-top:5px'>Boolean: <t t-if="state.bool">True</t><t t-else="">False</t></div>
          	<div style='margin-top:5px'>Color: <t t-esc="state.color"/></div>
        	</div>
      		</div>
    		</div>`;

  			state = useState({ text: "" });
			
		}



const app = new Form();
app.mount(document.body);
}

async function start() 
{
	try
	{
	template= await owl.utils.loadFile("form_app.xml")
	}
	catch(e)
	{
		 console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
    	 return;
	}
const env = { qweb: new owl.QWeb({template})};
owl.Component.env = env;
await owl.utils.whenReady();
app();


}
start();
