function app() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;
  const state = {
    todos: [],
    nextId: 1,
    isCompleted: false,
  };

  const actions = {
    addTodo({ state }, message) {
      state.todos.push({
        id: state.nextId++,
        message,
        isCompleted: false,
      });
    },
  };

  const APP_TEMPLATE = xml`
    <div>
      <input t-ref="input"/>
      <button t-on-click="focusInput">Click</button><br/>
      <span t-ref="sub_component"/><br/>
      </div>`;

  const list = [];

  class SomeComponent extends Component {
    inputRef = useRef("input");
    comp_ref = useRef("sub_component");
    list1 = []


    focusInput() {
      let todo_task = this.inputRef.el.value;
      this.list1.push(todo_task);
      this.comp_ref.el.innerHTML = this.list1;
      const data = document.querySelector('span');
      this.list1.forEach((value) => {
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox"; 
        data.append(checkbox);
      
          checkbox.addEventListener('change', (ev) => {
            if (ev.target.checked) {
              state.isCompleted == true
            } else {
              state.isCompleted = false
            }
          });
      });


      const store = new owl.Store({ state, actions });
      store.on("update", null, () => console.log(store.state));

      // updating the state
      store.dispatch("addTodo", todo_task);
      this.inputRef.el.value = null
    }


  }
  SomeComponent.template = APP_TEMPLATE;
  const somecomponent = new SomeComponent();
  somecomponent.mount(document.body);

}

/**
 * Initialization code
 * This code load templates, and make sure everything is properly connected.
 */
async function start() {
  let templates;
  try {
    templates = await owl.utils.loadFile('store_app.xml');
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