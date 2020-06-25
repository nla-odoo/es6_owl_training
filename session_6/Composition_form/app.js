
function app(){

    const { Component, useState, tags } = owl;
    const { xml, css } = tags;

    const COUNTER_TEMPLATE = xml`<div>
    <h1><t t-esc="props.title"/></h1>
    <h3><t t-esc="props.int"/></h3>
    <h3><t t-esc="props.boolean"/></h3>
    <h3><t t-esc="props.array"/></h3>
    <button t-on-click="state.value++" class="btn">
      click..! [<t t-esc="state.value"/>]
    </button></div>`;

    const COUNTER_STYLE = css`
    .btn{height:50px; width:100px; font-weight:bold;}`;

    class Counter extends Component {
    state = useState({ value: 0, title:"", int:"", boolean:"", array:""})
    toggle(){
      this.el.querySelector('button').classList.toggle('btn');
    }
    }
    Counter.template = COUNTER_TEMPLATE;
    Counter.style = COUNTER_STYLE;


    const APP_TEMPLATE = xml`
    <div t-name="App">
        <span>some text</span>
        <Counter  title="'demo'" int="123" boolean="true" array="'[1,2,3,4,5,6,7,8,9,0]'"/>
    </div>`;

    class App extends Component {
        static components = { Counter };
    }
    App.template = APP_TEMPLATE;

    const app = new App();
    app.mount(document.body);

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
    app();
}

start();
