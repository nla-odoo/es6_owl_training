function app() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;

class java1 extends Component {
  static template = xml`<span>child java</span>`;
}
class python1 extends Component {
  static template = xml`<span>child python</span>`;
}
class App extends Component {
   constructor(parent, props) {
    super(...arguments);
    static components = { test };
    some = { list: { 1, 2, 3, 4, 5 } };
  }
  static template = xml`<div>
      <input t-ref="input"/><br/><br/>
      <button t-on-click="change_state">Click..[<t t-esc="state.child"/>]</button>
      <t t-component="myComponent" t-key="state.child"/>
    </div>`;

  state = useState ({ child: "java" });
  
  get myComponent() {
    return this.state.child === "java" ? java1 : python1;
  }
  change_state(){
    this.state.child = this.state.child === "java" ? "python" :"java";
  }
}
  
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
    templates = await owl.utils.loadFile('dy_app.xml');
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
