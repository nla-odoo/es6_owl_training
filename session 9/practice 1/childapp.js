function app() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;

const childComponentTemplate = xml`
     <div>
         <span>Child Component</span>
         <h1>
           <t t-esc="props"/>
         </h1>
    </div>`;

class childComponent extends App{
    static template = childComponentTemplate;
}

//  childComponent.template = childComponentTemplate;
  const childApp = new childComponent();

}

async function start() {
  let templates;
  try {
    templates = await owl.utils.loadFile('childapp.xml');
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