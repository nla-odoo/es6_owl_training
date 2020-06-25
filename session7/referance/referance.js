function app() {
    const { Component, useState, tags } = owl;
    const { xml, css } = tags;
    const { useRef } = owl.hooks;

    const COUNTER_TEMPLATE = xml`<div>
        
    </div>`;

    class Counter extends Component {
        state = useState({ value: 0, title:"", })
    }
    Counter.template = COUNTER_TEMPLATE;

    const APP_TEMPLATE = xml`
        <div>
            <input t-ref="input"/>
            <button t-on-click="operations">Click</button>
            <Counter t-ref="some_component"/>
        </div>`;

    class App extends Component {
        static components = { Counter };
        inputRef = useRef("input");
        component_ref = useRef("some_component");
        list = [];

        operations() {
            debugger;
            var a = this.inputRef.el.value;
            this.list.push(a);
            this.component_ref.comp.el.innerHTML = this.list
        }
    }
 
    App.template = APP_TEMPLATE;
    const app = new App();
    app.mount(document.body);
}

async function start() {
    let templates;
    try {
        templates = await owl.utils.loadFile('template.xml');
    } catch(e) {
        console.error(`This app requires a static server. If you have python installed, try 'python app.py'`);
        return;
    }
    const env = { qweb: new owl.QWeb({templates})};
    owl.Component.env = env;
    await owl.utils.whenReady();
    app();
}

start();