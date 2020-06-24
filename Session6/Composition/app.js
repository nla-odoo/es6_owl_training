function app()
{

  const { Component, useState, tags } = owl;
  const { xml, css } = tags;

  console.log("\n\n\n\n.........",xml);
  console.log("\n\n\n\n.........",css);


  const COUNTER_TEMPLATE = xml`<div>
    <h1><t t-esc="props.title"/></h1>
    <button t-on-click="state.value++" class="btn">
      click..! [<t t-esc="state.value"/>]
    </button></div>`;

  const COUNTER_STYLE = css`
    .btn{height:50px; width:100px; font-weight:bold;}`;



 const COUNTER_TEMPLATE_NEW= xml`<div>
    <h1><t t-esc="props.title_2"/></h1>
    <button t-on-click="state.value_2++" class="btn">
      Counter_new [<t t-esc="state.value_2"/>]
    </button></div>`;

  const COUNTER_STYLE_NEW = css`
    .btn{height:50px; width:100px; font-weight:bold;}`;

    class Counter_new extends Component {
    state = useState({ value_2: 0, title_2:""})
    toggle()
    {
      this.el.querySelector('button').classList.toggle('btn');
      }
    }


  Counter_new.template = COUNTER_TEMPLATE_NEW;
  Counter_new.style = COUNTER_STYLE_NEW;



    class Counter extends Component {
    state = useState({ value: 0, title:""})
    toggle()
    {
      this.el.querySelector('button').classList.toggle('btn');
      }
    }



  Counter.template = COUNTER_TEMPLATE;
  Counter.style = COUNTER_STYLE;

  const APP_TEMPLATE = xml`
    <div t-name="App">
      <span>some text</span>
      <Counter  title="'Title'"/>
      <Counter_new  title="'Title'"/>
    </div>`;

  class App extends Component {
    static components = { Counter,Counter_new };

  }


   App.template = APP_TEMPLATE;

  const app = new App();
  app.mount(document.body);
}






async function start() {
  let templates;
  try {
    templates = await owl.utils.loadFile('index.xml');
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