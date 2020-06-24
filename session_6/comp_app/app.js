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

  const count = xml`<div>
    <h1><t t-esc="props.title"/></h1>
    <div><t t-esc="props.int"/><br/><t t-esc="props.boolean"/>
    <br/><t t-esc="props.array"/></div>
    </div>`;

  class Counter extends Component {
    state = useState({ value: 0, title:"", int:"", boolean:"", array:""})
  }
  Counter.template = count;

  // App
  const subcount = xml
  `<div t-name="App">
      <Counter  title="'demo'" int="123" boolean="true" array="'[1,2,3,4,5,6,7,8,9,0]'"/>
    </div>`;

  class App extends Component {
    static components = { Counter };

  }
  App.template = subcount;

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
    console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
    return;
  }
  const env = { qweb: new owl.QWeb({templates})};
  owl.Component.env = env;
  await owl.utils.whenReady();
  app();
}

start();
