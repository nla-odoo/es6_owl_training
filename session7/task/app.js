function app() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;
  let items=[];



   const Sub_Component = xml`
     <h1>
       <t t-esc="state.items"/>
    </h1>`;



    class SubComponent extends Component
    {
      state = useState({ items : ""})
    }

    SubComponent.template = Sub_Component;

  const APP_TEMPLATE = xml`
    <div>
      <input t-ref="input"/>
      <button t-on-click="addinto_list">Click</button>
      <SubComponent t-ref="SubCom" />
    </div>`;


  class App extends Component {
   static components = { SubComponent };
    inputRef = useRef("input");
    component_ref = useRef("SubCom");
   
    addinto_list() {
            items.push(this.inputRef.el.value);
            this.component_ref.comp.state.items=items.toString();
            console.log("\n\n\n\n\n......",this.component_ref.comp.state.items);
    }

   
  }

  
  App.template = APP_TEMPLATE;
  const app = new App();
  app.mount(document.body);

}



async function start() {
  let templates;
  try {
    templates = await owl.utils.loadFile('index.xml');
  } catch(e) {
    console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
    return;
  }
  const env = { qweb: new owl.QWeb({templates})};
  owl.Component.env = env;
  await owl.utils.whenReady();
  app();
}

start();
