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

          	<div>
            Text (immediate): <input t-model="state.text"/>
          	</div>

          	<div>
            Other text (lazy): <input t-model.lazy="state.othertext"/>
          	</div>

          	<div>
            Number: <input type="number" t-model.number="state.number"/>
          	</div>

          	<div>
            Boolean: <input  type="checkbox" t-model="state.bool"/>
          	</div>


          	<div>
            Color, with a select:
            <select  t-model="state.color">
              <option value="">Select a color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
            </select>
          	</div>

          	<div>
            Color, with radio buttons:
            	<span><input type="radio" name="color" id="red" value="red" t-model="state.color"/><label for="red">Red</label></span>
            	<span><input type="radio" name="color" id="blue" value="blue" t-model="state.color"/><label for="blue">Blue</label></span>
          	</div>

         	<hr/>
          	<h1>State</h1>
          	<div>Text: <t t-esc="state.text"/></div>
          	<div>Other Text: <t t-esc="state.othertext"/></div>
          	<div>Number: <t t-esc="state.number"/></div>
          	<div>Boolean: <t t-if="state.bool">True</t><t t-else="">False</t></div>
          	<div>Color: <t t-esc="state.color"/></div>
        	</div>
      		</div>
    		</div>`;

  			state = useState({ text: "" });
			
		}



owl.config.mode = "dev";
const app = new Form();
app.mount(document.body);
}







async function start() 
{
	try
	{
	template= await owl.utils.loadFile("index.xml")
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