function app()
{
const { Component, Store } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useState, useRef, useDispatch, useStore } = owl.hooks;
console.log("\n\n\n\n\n\n...........",Component)
const initialState = {
  nextId: 1,
  tasks: []
};


const actions={
	addTask({ state }, title)
	{
		title = title.trim();
		console.log("\n\n\n\n\n\n...........",title)

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

	},
	deleteTask(){
		const index = state.tasks.findIndex(t => t.id === id);
	    state.tasks.splice(index, 1);
	}

};


const task_templet = xml /* xml */
	`<div class="task" t-att-class="props.task.isCompleted ? 'done' : ''">
        <input type="checkbox" t-att-checked="props.task.isCompleted" t-on-click="dispatch('toggleTask', props.task.id)"/>
        <span><t t-esc="props.task.title"/></span>
        <span class="delete" t-on-click="dispatch('deleteTask', props.task.id)">delete</span>
    </div>`;

const app_template = xml /*xml*/
	`<div class="task-list">
		<input placeholder="Enter a new task" t-on-keyup="addTask" t-ref="add-input"/>
        <t t-foreach="tasks" t-as="task" t-key="task.id">
        	<Task task="task"/>
        </t>
    </div>`;



class Task extends Component{
		static template = task_templet;
        static props = ["task"];
  		dispatch = useDispatch();
}

class App extends Component
{
	static template = app_template;
	static components = { Task };
	
		inputRef = useRef("add-input");
		mounted() {
		    this.inputRef.el.focus();
		}
		nextId = 1;
		tasks = useStore(state => state.tasks);
  		dispatch = useDispatch();

		addTask(ev) {
		    // 13 is keycode for ENTER
		    if (ev.keyCode === 13) {
		        this.dispatch("addTask", ev.target.value);
      			ev.target.value = "";
	    	}
		}
}


function makeStorage()
{	
	  const localState = window.localStorage.getItem("todoapp");
	  console.log("\n\n\n\n\n\n......localState.....",localState)
  	  const state = localState ? JSON.parse(localState) : initialState;
  	  console.log("\n\n\n\n\n\n......state.....",state);
  	  const store = new Store({ state, actions });
  	  console.log("\n\n\n\n\n\n......store.....",store);
  	  store.on("update", null, () => {
  		console.log("upade Store");
    	localStorage.setItem("todoapp", JSON.stringify(store.state));
		});
  	  console.log("\n\n\n\n\n\n......store.....",store);
  	  return store;
}

console.log("\n\n\n\n\n\n...........",App.env)
owl.config.mode = "dev";
App.env.store=makeStorage();
const app = new App();
app.mount(document.body);

}




async function start() 
{
let load_template;
try{
load_template =await owl.utils.loadFile("index.xml")
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