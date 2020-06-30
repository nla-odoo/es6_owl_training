function App() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;
  const bus = new owl.core.EventBus();

  const subRoot_template = xml`<div>
    <h1 class='first_h1'></h1>
    <h1 class='second_h1'></h1>
    </div>`;

  class SubRoot extends Component {
    constructor(...args){
      super(...args);
      this.state = useState({ value: 0, title:""});
      bus.on("click_me", null, function (...args) {
        self.document.querySelector(".first_h1").innerText=args;
      });
    }
  }
  SubRoot.template = subRoot_template;


  const Root_Template = xml`
    <div>
      <button t-on-click="event">Click me</button>
    </div>`;

  class RootApp extends Component {

    event() {
      bus.trigger("click_me", 'ani');
    }
  }

  
  RootApp.template = Root_Template;
  const root_app = new RootApp();
  root_app.mount(document.body);
  const sub_root = new SubRoot();
  sub_root.mount(document.body);

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
