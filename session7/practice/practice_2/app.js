function app() 
{
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;
  const APP_TEMPLATE = xml`
    <div>
      <input t-ref="input"/>
      <button t-on-click="focusInput">Click</button>
    </div>`;


class SomeComponent extends Component
{
    inputRef = useRef("input");
    focusInput()
    {
      this.inputRef.el.focus();
      console.log("\n\n\n\n\n\n\n............",this.inputRef);
    }
}

  SomeComponent.template = APP_TEMPLATE;
  const somecomponent = new SomeComponent();
  somecomponent.mount(document.body);

}


async function start() {
  let templates;
  try 
  {
    templates = await owl.utils.loadFile('index.xml');
  }
  catch(e)
  {
    console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
    return;
  }
  const env = { qweb: new owl.QWeb({templates})};
  owl.Component.env = env;
  await owl.utils.whenReady();
  app();
}

start();
