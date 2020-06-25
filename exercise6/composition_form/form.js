
/**
 * This is the javascript code defined in the playground.
 * In a larger application, this code should probably be moved in different
 * sub files.
 */
function app() {
  // This example illustrates how Owl enables single file components,
  // which include code, template and style.
  //
  // This is very useful in some situations, such as testing or quick prototyping.
  // Note that this example has no external xml or css file, everything is
  // contained in a single js file.

  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
// style="height:50px; width:100px; font-weight:bold;"
// t-on-click="state.value++"
  // Counter component
  const COUNTER_TEMPLATE = xml`<div>
    <h1><t t-esc="props.title"/></h1>
    <h2><t t-esc="props.int"/></h2>
    <h3><t t-esc="props.boolean"/></h3>
    <h4><t t-esc="props.array"/></h4>
    </div>`;

  const COUNTER_STYLE = css`
    .btn{height:50px; width:100px; font-weight:bold;}`;

  class Counter extends Component {
    state = useState({ value: 0, title:"", int:"", boolean:"", array:""})
    // toggle(){
    //   this.el.querySelector('button').classList.toggle('btn');
    // }
  }
  Counter.template = COUNTER_TEMPLATE;
  Counter.style = COUNTER_STYLE;

  // App
  const APP_TEMPLATE = xml`
    <div t-name="App">
      <span>some text</span>
      <Counter  title="'Title'" int="123" boolean="true" array="'[1,2,3]'" />
    </div>`;

  class App extends Component {
    static components = { Counter };
    // state = useState({ value: 0});

  }
  App.template = APP_TEMPLATE;
  // App.components = { Counter };

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
    templates = await owl.utils.loadFile('form.xml');
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
