
function app() {
    const { useState } = owl.hooks;
    const {Component, tags} = owl;
    const { xml } = tags;

    class App extends Component {
        constructor() {
            super(...arguments);
            this.counter = useState({ value: 0 });
        }

        increment(counter) {
            this.counter.value++;
        }

        decrement(counter) {
            this.counter.value--;
        }
  }
    const app = new App();
    app.mount(document.body);
}

async function start() {
    let templates;
    try {
        templates = await owl.utils.loadFile('app.xml');
    } catch(e) {
        console.error('This app requires a static server.');
        return;
    }
    const env =  { qweb: new owl.QWeb({templates})};
    owl.Component.env = env;
    await owl.utils.whenReady();
    app();
}
start();
