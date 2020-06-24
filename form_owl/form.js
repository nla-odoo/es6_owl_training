function form() {
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
                <h1>Create New Form</h1>
                <div>Text Input: <input t-model="state.text"/></div>
                <div>
                    Other text (lazy): <input t-model.lazy="state.othertext"/>
                </div>
                <div>
                    ID: <input type="number" t-model.number="state.number"/>
                </div>
                <div>
                    Gender:
                    <select  t-model="state.gen">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <br />
                <h1>State</h1>
                    <div>Text: <t t-esc="state.text"/></div>
                    <div>Other Text: <t t-esc="state.othertext"/></div>
                    <div>ID: <t t-esc="state.number"/></div>
                    <div>Color: <t t-esc="state.gen"/></div>
                </div>
            </div>
        </div>`;

        state = useState({ text: "" });

    }



owl.config.mode = "dev";
const form1 = new Form();
form1.mount(document.body);
}







async function start() 
{
    try
    {
    template= await owl.utils.loadFile("form.xml")
    }
    catch(e)
    {
     console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
       return;
    }
const env = { qweb: new owl.QWeb({template})};
owl.Component.env = env;
await owl.utils.whenReady();
form();


}





start(); 