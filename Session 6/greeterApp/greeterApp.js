const { Component } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useState } = owl.hooks;


class GreeterSub extends Component {
 static template = xml`
  <div t-name="greeterSub" class="greeterSub">
    <p>This is Subcomponent of the Subcomponent of main App</p>
  </div>
 `; 
}



class Greeter extends Component {

  static template = xml`
  <div t-name="Greeter" class="greeter" t-on-click="toggle">
  <t t-esc="state.word"/>, <t t-esc="props.name"/> <t t-esc="props.abcd"/>
  
  <GreeterSub/>
  </div>
  
  `;

  constructor() {
    super(...arguments);
    this.state = useState({ word: 'Hello' });
  }

  toggle() {
    this.state.word = this.state.word === 'Hi' ? 'Hello' : 'Hi';
  }

  
}

Greeter.components = { GreeterSub };


class App extends Component {
  constructor() {
    super(...arguments);
    this.state = useState({ name: 'World', abc: 'ABC'});
  }

  static template = xml`
  <div t-name="App">
  <Greeter name="state.name" abcd="state.abc"/>
  </div>
  `;
  
}


App.components = { Greeter };

function start(){
  const app = new App();
  app.mount(document.getElementById("greeterApp"));
}

whenReady(start);

