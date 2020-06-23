function app()
{
const { Component, Store } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useState, useRef, useDispatch, useStore } = owl.hooks;

		const app_template = xml /*xml*/
			`<div>
			<input t-on-input='_updateInputValue' />
			<span t-esc='state.text' />
			</div>`

		class Form extends owl.Component
		{
			static template = app_template;
  			state = useState({ text: "" });
			_updateInputValue(event) 
  			{
    			this.state.text = event.target.value;
  			}
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