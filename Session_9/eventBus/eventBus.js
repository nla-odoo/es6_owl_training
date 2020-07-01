const { whenReady } = owl.utils;
const { Component, useState, tags } = owl;
const { xml, css } = tags;
const { useRef } = owl.hooks;
const bus = new owl.core.EventBus();


class Counter extends Component {

  static template = xml`
    <div>
    <h3> </h3>
    </div>
  `;
  constructor(...args) {
      super(...args);
      this.state = useState({ value: 0})
      bus.on("click_me", null, function (...args) {
        self.document.querySelector("h3").innerText=args;
      });
      bus.on("increment", null, function (...args) {
        self.document.querySelector("h3").innerText=args;
      });
      bus.on("decrement", null, function (...args) {
        self.document.querySelector("h3").innerText=args;
      });
    }
}

const list = [];

class App extends Component {
  static template = xml`
    <div>
      <button t-on-click="inc">increment by one</button>
      <button t-on-click="click">click to show value</button>
      <button t-on-click="dec">decrement by one</button>
    </div>
  `;  

  click() {
      bus.trigger("click_me", 4, 5, 6);
    }
    inc() {
      bus.trigger("increment", 7, 8, 9);
    }
    dec(){
      bus.trigger("decrement", 1, 2, 3);
    }
}

App.components = { Counter };

function start() {

  const app = new App();
  app.mount(document.body);
  const count = new Counter();
  count.mount(document.body);

}

whenReady(start);