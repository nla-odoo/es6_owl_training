function app() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;


  const APP_TEMPLATE = xml`
      <div class="task-list">
          <t t-foreach="tasks" t-as="task" t-key="task.id">
              <Task task="task"/>
          </t>
      </div>`;

  class App extends Component {
      static template = APP_TEMPLATE;
      static components = { Task };

      tasks = [
        {
            id: 1,
            title: "Female",
        },
        {
            id: 2,
            title: "Male",
        },
        {
            id: 3,
            title: "Other",
        },
      ];
  }
  
  const TASK_TEMPLATE = xml`
    <div class="task">
        <span><t t-esc="props.task.id"/></span>
        <span><t t-esc="props.task.title"/></span>
    </div>`;

  class Task extends Component {
      static template = TASK_TEMPLATE;
      static props = ["task"];
  }
  const app = new Task();
  app.mount(document.body);
}



async function start() {
  let templates;
  try {
    templates = await owl.utils.loadFile('template.xml');
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