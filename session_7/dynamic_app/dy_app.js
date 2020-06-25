function app() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;

class java extends Component {
  static template = xml`<span>child a</span>`;
}
class python extends Component {
  static templatese = xml`<span>child b</span>`;
}
class App extends Component {
  static template = xml`<div>
      <input t-ref="input"/><br/><br/>
      <button t-on-click="focusInput">Click</button>
    </div>`;

  state = useState ({ child: "a" });

  get myComponent() {
    return this.state.child === "a" ? A : B;
  }
  change_state(){
    debugger;
    return this.state.child === "a" ? "b" :"a";
  }
}
  
  // App.template = APP_TEMPLATE;
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
