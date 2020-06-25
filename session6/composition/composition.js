function app() {

    const { Component, useState, tags } = owl;
    const { xml, css } = tags;

    const count = xml
    `<div>
        <h1><t t-esc="props.title"/></h1>
        <div>
            <h3><t t-esc="props.int"/></h3><br/>
            <h3><t t-esc="props.boolean"/></h3><br/>
            <h3><t t-esc="props.array"/></h3><br/>
        </div>
        <div>
            <button t-on-click="state.value++" class="btn">
                click..! [<t t-esc="state.value"/>]
            </button>
        </div>
    </div>`;

    class Counter extends Component {
        state = useState({ value: 0, title:"", int:"", boolean:"", array:""})
        toggle(){
            this.el.querySelector('button').classList.toggle('btn');
        }
    }
    Counter.template = count;

    const subcount = xml
    `<div t-name="App">
        <Counter  title="'Composition'" int="123" boolean="true" array="'[1,2,3,4,5,6,7,8,9,0]'"/>
    </div>`;

    class App extends Component {
        static components = { Counter };
    }
    App.template = subcount;

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
        templates = await owl.utils.loadFile('template.xml');
    } catch(e) {
        console.error(`This app requires a static server.`);
        return;
    }
    const env = { qweb: new owl.QWeb({templates})};
    owl.Component.env = env;
    await owl.utils.whenReady();
    app();
}

start();