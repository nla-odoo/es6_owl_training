function app() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;


  const COUNTER_TEMPLATE = xml`<div>
    <h1> </h1>
    </div>`;

  class Counter extends Component {
    state = useState({ value: 0, title:""})
  }
  Counter.template = COUNTER_TEMPLATE;


  const APP_TEMPLATE = xml`
    <div>
      <input t-ref="input"/>
      <button t-on-click="operations">Submit</button>
      <Counter t-ref="sub_component"/>
    </div>`;

  const list = [];

  class App extends Component {
    static components = { Counter };
    inputRef = useRef("input");
    comp_ref = useRef("sub_component");
    list = []

    operations() {
      var list = this.inputRef.el.value;
      this.list.push(list);
      this.comp_ref.comp.el.innerHTML = this.list;
  
    }
  }

    App.template = APP_TEMPLATE;
  const app = new App();
  app.mount(document.body);

}

/**
 * Initialization code
 * This code load templates, and make sure everything is properly connected.
 */
async function start() {
  let templates;
  try {
    templates = await owl.utils.loadFile('ref_app.xml');
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
