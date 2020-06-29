function app() {
 const { Component, useState, tags } = owl;
 const { xml, css } = tags;
 const { useRef } = owl.hooks;

 const TASK_TEMPLATE = xml /* xml */`
   <div class="task" t-att-class="props.task.isCompleted ? 'done' : ''">
       <input type="checkbox" t-att-checked="props.task.isCompleted"/>
       <span><t t-esc="props.task.title"/></span>
   </div>`;

 class Task extends Component {
     static template = TASK_TEMPLATE;
     static props = ["task"];
 }

// -------------------------------------------------------------------------
// App Component
// -------------------------------------------------------------------------
 const APP_TEMPLATE = xml /* xml */`
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
           title: "apple",
       },
       {
           id: 2,
           title: "banana",
       },
     ];
 }
 
 const app = new App();
 app.mount(document.body);
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
 app();
}

start();