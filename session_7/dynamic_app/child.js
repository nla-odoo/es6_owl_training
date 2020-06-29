function app() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;

const child_Component = xml`
    <h1>
       <test t-props="some.list"/>
    </h1>`;

class chlidComponent extends App
    {
      state = useState({list : ""})
    }

  chlidComponent.template = child_Component;
  const appl = new chlidComponent();

  appl.set_props();
  appl.mount(document.body);

}



async function start() {
  let templates;
  try {
    templates = await owl.utils.loadFile('dy_app.xml');
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