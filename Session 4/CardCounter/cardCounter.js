const { Component, useState } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;

class Card extends Component {

  static template = xml`
    <div t-name="Card" class="card" t-att-class="state.showContent ? 'full' : 'small'">
    <div class="card-title">
    <t t-esc="props.title"/><button t-on-click="toggleDisplay">Toggle</button>
    </div>
    <t t-if="state.showContent">
    <div class="card-content" >
    <t t-slot="content"/>
    </div>
    <div class="card-footer">
    <t t-slot="footer"/>
    </div>
    </t>
    </div>


  `;  
  constructor() {
    super(...arguments);
    this.state = useState({ showContent: true });
  }

  toggleDisplay() {
    this.state.showContent = !this.state.showContent;
  }
}

class Counter extends Component {

  static template = xml`
    <div t-name="Counter">
    <t t-esc="state.val"/><button t-on-click="inc">Inc</button>
    </div>
  `;
    constructor() {
        super(...arguments);
        this.state = useState({val: 1});
    }

    inc() {
        this.state.val++;
    }
}

class App extends Component {
  static template = xml`
    <div t-name="App" class="main">
    <Card title="'Title card A'">
    <t t-set="content">Content of card 1...  [<t t-esc="state.a"/>]</t>
    <t t-set="footer"><button t-on-click="inc('a', 1)">Increment A</button></t>
    </Card>
    <Card title="'Title card B'">
    <t t-set="content">
    <div>Card 2... [<t t-esc="state.b"/>]</div>
    <Counter />
    </t>
    <t t-set="footer"><button t-on-click="inc('b', -1)">Decrement B</button></t>
    </Card>
    </div>
  `;

  constructor() {
    super(...arguments);
    this.state = useState({a: 1, b: 3});
  }

  inc(key, delta) {
    this.state[key] += delta;
  }
}

App.components = {Card, Counter};

function start() {

  const app = new App();
  app.mount(document.getElementById("cardCounter"));
}

whenReady(start);