
function app() {
  const { useState } = owl.hooks;
  const {Component, tags} = owl;
  const { xml } = tags;

  // Main root component
  class App extends Component {
      constructor() {
          super(...arguments);
          // simple state hook (reactive object)
          this.counter = useState({ value: 5 });
      }

      increment(counter) {
        this.counter.value++;
      }

      decrement(counter) {
        this.counter.value--;
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
    templates = await owl.utils.loadFile('app.xml');
  } catch(e) {
    console.error(`This app requires a static server.  If you have python installed, try 'python3 app.py'`);
    return;
  }
  const env =  { qweb: new owl.QWeb({templates})};
  owl.Component.env = env;
  await owl.utils.whenReady();
  app();
}

start();
