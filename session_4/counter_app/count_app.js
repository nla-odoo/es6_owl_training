
function app() {
  const { useState } = owl.hooks;
  const {Component, tags} = owl;

  class App extends Component {
      constructor() {
          super(...arguments);
          this.counter = useState({ value: 0 });
      }

      incdec (ev, counter) {
        counter_value = ev.currentTarget.dataset.name === 'inc' ? this.counter.value++ : this.counter.value--;

      }
  }
  // Application setup
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
    templates = await owl.utils.loadFile('counter_app.xml');
  } catch(e) {
    console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
    return;
  }
  const env =  { qweb: new owl.QWeb({templates})};
  owl.Component.env = env;
  await owl.utils.whenReady();
  app();
}

start();
