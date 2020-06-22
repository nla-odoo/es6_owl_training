
function application() {
    const { useState, useRef, useDispatch, useStore } = owl.hooks;
    const {Component, tags} = owl;
    const { xml } = owl.tags;
    const { whenReady } = owl.utils;

    // Main root component
    class Application extends Component {
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

        double(counter) {
            this.counter.value = this.counter.value*2;
        }
    }
    // Application setup
    const app = new Application();
    app.mount(document.body);
    }

    /**
    * Initialization code
    * This code load templates, and make sure everything is properly connected.
    */
    async function start() {
    let templates;
    try {
    templates = await owl.utils.loadFile('application.xml');
    } catch(e) {
    console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
    return;
    }
    const env =  { qweb: new owl.QWeb({templates})};
    owl.Component.env = env;
    await owl.utils.whenReady();
    application();
}

start();