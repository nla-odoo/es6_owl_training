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
            Name (immediate): <input t-model="state.name"/>
            </div>
            <div>
            Address (lazy): <input t-model.lazy="state.address"/>
            </div>
            <div>
            Number: <input type="number" t-model.number="state.number"/>
            </div>
            <div>
            Is Indian: <input  type="checkbox" t-model="state.nationality"/>
            </div>
            <div>
            Country, with a select:
            <select  t-model="state.country">
              <option value="">Select a country</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
            </select>
            </div>
            <div>
            Gender, with radio buttons:
              <span>
                <input type="radio" name="gender" id="male" value="male" t-model="state.gender"/>
                <label for="male">Male</label>
              </span>
              <span>
                <input type="radio" name="gender" id="female" value="female" t-model="state.gender" />
                <label for="female">Female</label>
              </span>
            </div>
          <hr/>
            <h1>Personal Info</h1>
            <div>NAme: <t t-esc="state.name"/></div>
            <div>Address: <t t-esc="state.address"/></div>
            <div>Number: <t t-esc="state.number"/></div>
            <div>Boolean: <t t-if="state.nationality">True</t><t t-else="">False</t></div>
            <div>Country: <t t-esc="state.country"/></div>
            <div>Gender: <t t-esc="state.gender"/></div>
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
app();


}





start();