function App() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;

class A extends Component {
  static template = xml`
    <div>
    <t t-esc='props.state.dataSet'/><br/>
    <span>child a</span></div>
  `;
}
class B extends Component {
  static template = xml`<div>
  <t t-esc='props.state.dataSet'/><br/>
  <span>child b</span></div>`;
}
class Root extends Component {
  static template = xml`<div>
  <input t-ref='input_ref'/>
  <button t-on-click="change_state">
      click..![<t t-esc="state.childTag"/>]
    </button>
  <t t-component="SubComponent" t-key="state.childTag" state='state'/>
  </div>`;

  state = useState ({ childTag: "component A", dataSet: []});
  inputRef = useRef('input_ref');

  get SubComponent() {
    return this.state.childTag === "component A" ? A : B;
  }
  change_state(){
    if(this.state.childTag == 'component A'){this.state.dataSet.push(this.inputRef.el.value.split(' '))};
    this.state.childTag = this.state.childTag === "component A" ? "component B" : "component A";
  }
}
  
  // App.template = APP_TEMPLATE;
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
