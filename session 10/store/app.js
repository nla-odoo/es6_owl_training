function App() {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;
  const state = {
    todos: [],
    nextId: 1,
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

  const Root_Template = xml`
    <div>
      <input t-ref="input"/>
      <button t-on-click="StoreInput">Click</button>
    </div>`;

  class RootComponent extends Component {
    inputRef = useRef("input");

    StoreInput() {
      let input_value = this.inputRef.el.value;
      const store = new owl.Store({ state, actions });
      store.on("update", null, () => console.log(store.state));

      store.dispatch("addTodo", input_value);
      this.inputRef.el.value = null
    }


  }

  
  RootComponent.template = Root_Template;
  const rootComponent = new RootComponent();
  rootComponent.mount(document.body);

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
