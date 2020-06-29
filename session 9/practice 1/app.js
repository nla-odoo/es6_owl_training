function App() {

  const { Component, useState } = owl;
  const { xml, css } = owl.tags;

  const app_template = xml`
     <div>
        <button t-on-click="increment">Increment Parent State ani</button>
    </div>`;

  class RootApp extends Component {
      static template = app_template;
      constructor() {
          super(...arguments);
          this.state = useState({ n: 0});
      }

      increment() {
          this.state.n++;
          console.log('increment>>>>>>>>>..')
      }

      set_props() {
        this.props= this.state.n;
      }
  }

  const rootApp = new RootApp();
  rootApp.mount(document.body);

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
