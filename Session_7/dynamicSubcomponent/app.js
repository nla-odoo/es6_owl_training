(function () {
  const { Component, useState, tags } = owl;
  const { xml, css } = tags;
  const { useRef } = owl.hooks;
  const { whenReady } = owl.utils;


  const COUNTER_TEMPLATE = xml`<div>
  <h1></h1>
  </div>`;

  class Counter extends Component {
    state = useState({ value: 0, title:""})
  }
  Counter.template = COUNTER_TEMPLATE;

  const APP_TEMPLATE = xml`
  <div>
  <input t-ref="input"/>
  <button t-on-click="operations">Click</button>
  <Counter t-ref="some_component"/>
  </div>`;

  class App extends Component {
    static components = { Counter };
    inputRef = useRef("input");
    component_ref = useRef("some_component");
    inputlist = [];

    operations() {
      var a = this.inputRef.el.value;
      this.inputlist.push(a);
      this.component_ref.comp.el.innerHTML = this.inputlist;
      
    }
  }
  App.template = APP_TEMPLATE;
  

  function setup() {
    const app = new App();
    app.mount(document.body);
  }

  whenReady(setup);
})();
