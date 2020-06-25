function app() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;

class subcom_1 extends Component {
  static template = xml`<span>child subcom_1</span>`;
}
class subcom_2 extends Component {
  static template = xml`<span>child subcom_2</span>`;
}

class App extends Component
{
  static template = xml`
  <div>
  <button t-on-click="change_state">
      click..!
    </button>
  <t t-component="myComponent" t-key="state.child"/>
  </div>`;

  state = useState ({ child: "subcom_1" });

  get myComponent()
  {
    return this.state.child === "subcom_1" ? subcom_1 : subcom_2;
  }
  change_state()
  {
    this.state.child = this.state.child === "subcom_1" ? "subcom_2" :"subcom_1";
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
