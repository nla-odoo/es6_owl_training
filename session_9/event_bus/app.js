function app() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;
  const bus = new owl.core.EventBus();

  const COUNTER_TEMPLATE = xml`<div>
    <h1></h1>
    </div>`;

  class Counter extends Component {
    constructor(...args){
      super(...args);
      this.state = useState({ value: 0, title:""});
      bus.on("click_me", null, function (...args) {
        self.document.querySelector("h1").innerText=args;
      });
    }
  }
  Counter.template = COUNTER_TEMPLATE;


  const APP_TEMPLATE = xml`
    <div>
      <button t-on-click="operations">Click</button>
    </div>`;

  class App extends Component {

    operations() {
      bus.trigger("click_me", 1, 2, 3);
    }
  }

  
  App.template = APP_TEMPLATE;
  const app = new App();
  app.mount(document.body);
  const counter = new Counter();
  counter.mount(document.body);

}

/**
 * Initialization code
 * This code load templates, and make sure everything is properly connected.
 */
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
  app();
}

start();
