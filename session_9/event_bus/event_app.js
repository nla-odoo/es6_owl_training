function app() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;
  const bus = new owl.core.EventBus();


  const COUNTER_TEMPLATE = xml`<div>
    <h3> </h3>
    </div>`;

  class Counter extends Component {
    constructor(...args) {
      super(...args);
      this.state = useState({ value: 0})
      bus.on("click_me", null, function (...args) {
        self.document.querySelector("h3").innerText=args;
      });
      bus.on("increment", null, function (...args) {
        self.document.querySelector("h3").innerText=args;
      });
      bus.on("decrement", null, function (...args) {
        self.document.querySelector("h3").innerText=args;
      });
    }
  }
  Counter.template = COUNTER_TEMPLATE;


  const APP_TEMPLATE = xml`
    <div>
      <button t-on-click="inc">increment by one</button>
      <button t-on-click="click">click to show value</button>
      <button t-on-click="dec">decrement by one</button>
    </div>`;

  const list = [];

  class App extends Component {
    click() {
      bus.trigger("click_me", 4, 5, 6);
    }
    inc() {
      bus.trigger("increment", 7, 8, 9);
    }
    dec(){
      bus.trigger("decrement", 1, 2, 3);
    }
  }

  App.template = APP_TEMPLATE;
  const app = new App();
  app.mount(document.body);
  const count = new Counter();
  count.mount(document.body);

}

/**
 * Initialization code
 * This code load templates, and make sure everything is properly connected.
 */
async function start() {
  let templates;
  try {
    templates = await owl.utils.loadFile('event_app.xml');
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
