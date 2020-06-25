function App() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;


  const SubComponent_Template = xml`<div>
    <h1></h1>
    <h5 class='class' id='class'></h5>
    </div>`;

  class SubComponent extends Component {
    state = useState({ value: 0, title:""})
  }
  SubComponent.template = SubComponent_Template;


  const ROOT_TEMPLATE = xml`
    <div>
      <input t-ref="input"/>
      <button t-on-click="events">Click</button>
      <SubComponent t-ref="some_component"/>
    </div>`;

  class Root extends Component {

    static components = { SubComponent };
    inputRef = useRef("input");
    component_ref = useRef("some_component");

    events() {
      var dataSet = [];
      console.log("=====>",this.component_ref.comp.el);
      console.log("=====>",this.inputRef.el.value.split(' '));
//      var data= this.inputRef;
      dataSet.push(this.inputRef.el.value.split(' '));
      this.component_ref.comp.el.innerText = dataSet;
    }
  }

  
  Root.template = ROOT_TEMPLATE;
  const root = new Root();
  root.mount(document.body);

}

async function start() {
  let templates;
  try {
    templates = await owl.utils.loadFile('app.xml');
  } catch(e) {
    console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
    return;
  }
  const env = { qweb: new owl.QWeb({templates})};
  owl.Component.env = env;
  await owl.utils.whenReady();
  App();
}

start();
