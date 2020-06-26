function app() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;



const Sub_Component = xml`
     <h1>
       <t t-esc="props"/>
    </h1>`;



class SubComponent extends Parentcom
    {
        state = useState({ items : ""})
    
    }

  
  SubComponent.template = Sub_Component;
  const app = new SubComponent();
  app.set_props();
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
