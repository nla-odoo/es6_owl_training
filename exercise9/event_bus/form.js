function app() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;
  const bus = new owl.core.EventBus();

  const COUNTER_TEMPLATE = xml`<div>
    <h1></h1>
    <h2></h2>
    </div>`;

  class Counter extends Component {
    constructor(...args){
      super(...args);
      this.state = useState({ value: 0, title:""});
      bus.on("click_me", null, function (...args) {
        self.document.querySelector("h1").innerText=args;
      });
      bus.on("add_me", null, function (...args) {
        self.document.querySelector("h2").innerText=args;
      });
    }
  }
  Counter.template = COUNTER_TEMPLATE;


  const APP_TEMPLATE = xml`
    <div>
      <button t-on-click="operations">Click</button>
      <button t-on-click="increment">Add</button>
    </div>`;

  class App extends Component {

    operations() {
      debugger;
      bus.trigger("click_me", 1, 2, 3);
    }
    increment() {
      bus.trigger("add_me", 2, 3, 4);
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
    templates = await owl.utils.loadFile('form.xml');
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
