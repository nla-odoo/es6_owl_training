function app()
{
const { Component, Store } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useState, useRef, useDispatch, useStore } = owl.hooks;
const initialState = {
  nextId: 1,
  tasks: []
};


const actions={
  addTask({ state }, title)
  {
    title = title.trim();
    if (title)
    {
      const newTask = {
                id: state.nextId++,
                title: title,
                isCompleted: false,
            };
            state.tasks.push(newTask);
    }
  },
  toggleTask({ state }, id)
  {
    const task = state.tasks.find(t => t.id === id);
      task.isCompleted = !task.isCompleted;
      console.log("\n\n\n\n\n\n.........isComplete....",task.isCompleted )
  },
  
};


const task_templet = xml /* xml */
  `<div class="task" t-att-class="props.task.isCompleted ? 'done' : ''">
        <input type="checkbox" t-att-checked="props.task.isCompleted" t-on-click="dispatch('toggleTask', props.task.id)"/>
        <span><t t-esc="props.task.title"/></span>
    </div>`;

const app_template = xml /*xml*/
  `<div class="task-list">
    <input placeholder="Enter a new task" t-on-keyup="addTask" t-ref="add-input"/>
        <t t-foreach="tasks" t-as="task" t-key="task.id">
          <Task task="task"/>
        </t>
    </div>`;



class Task extends Component
{
    static template = task_templet;
    static props = ["task"];
    dispatch = useDispatch();
}

class App extends Component
{
  static template = app_template;
  static components = { Task };
  
  inputRef = useRef("add-input");
  
  mounted()
  {
    this.inputRef.el.focus();
  }
    
    nextId = 1;
    tasks = useStore(state => state.tasks);
    dispatch = useDispatch();

    addTask(ev) {
        
        if (ev.keyCode === 13) {
            this.dispatch("addTask", ev.target.value);
            ev.target.value = "";
        }
    }

}


function makeStorage()
{ 
    const localState = window.localStorage.getItem("todoapp");
      const state = localState ? JSON.parse(localState) : initialState;
      const store = new Store({ state, actions });
      store.on("update", null, () => {
      console.log("upade Store");
      localStorage.setItem("todoapp", JSON.stringify(store.state));
    });
      return store;
}

owl.config.mode = "dev";
App.env.store=makeStorage();
const app = new App();
app.mount(document.body);

}




async function start() 
{
let load_template;
try{
load_template =await owl.utils.loadFile("app.xml")
 }
catch(e) 
{
    console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
    return;
}
const env = { qweb: new owl.QWeb({load_template})};

owl.Component.env = env;
await owl.utils.whenReady();
app();
}

start();