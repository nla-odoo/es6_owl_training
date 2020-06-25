function App() {

  const { Component, useState, tags } = owl;
  const { xml, css } = tags;

  const SubComponent_Template = xml`<div>
    <h1>
        <t t-foreach="props.datas" t-as='data' t-key='data.id'>
            <t t-esc='data.title'/>
            <br/>
        </t>
    </h1>
    <button t-on-click="toggle" class="btn">
      click..! [<t t-esc="state.value"/>]
    </button></div>`;

  const SubComponent_Style = css`
    .btn{height:50px; width:100px; font-weight:bold;}`;

  class SubComponent extends Component {
    state = useState({ value: 0});
    toggle(){
      this.el.querySelector('button').classList.toggle('btn');
      this.state.value++;
    }
  }
  SubComponent.template = SubComponent_Template;
  SubComponent.style = SubComponent_Style;

  // App
  const APP_TEMPLATE = xml`
    <div t-name="App">
      <span>Button Toggle</span>
      <SubComponent  datas="tasks"/>
    </div>`;

  class App extends Component {
    static components = { SubComponent };
    tasks = [
        {
            id: 1,
            title: "apple",
        },
        {
            id: 2,
            title: "banana",
        },
    ];

  }
  App.template = APP_TEMPLATE;

  // Application setup
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
  App();
}

start();