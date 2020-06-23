const { Component } = owl;
const { xml } = owl.tags;
const { whenReady } = owl.utils;
const { useState } = owl.hooks;



class App extends Component {

  static template = xml`
    <div>
      <div class="row" style="background-color: lightgrey; margin:1px; border: 1px solid black" id="first">
        <div class="col-md-12">
          <button t-name="increment_button" t-on-click="increment(1)">Increment</button>
          <button t-name="decrement_button" t-on-click="increment(2)">Decrement</button>
          <br/>
          <div id="result" style=" width: 100px;height: 100px;margin: 5px;background-color: red;text-align: center;user-select: none;line-height: 100px;background-color: #eeeeee;">
            <t t-esc="number.value"/>
          </div>
        </div>
      </div>
      
      <br/>
      
      <div class="row" style="background-color: lightgreen; margin:1px; border: 1px solid black" id="second">
        <div class="col-md-12">
          <div t-name="component_2" t-on-click="toggle" id="component2" style=" width: 100px;height: 100px;margin: 5px;background-color: red;text-align: center;user-select: none;line-height: 100px;background-color: #eeeeee;">    
            <t t-esc="state.word"/> ,World
          </div>
        </div>
      </div>

      <br/>

      <div class="row" style="background-color: lightblue; margin:1px;border: 1px solid black" id="third">
        <div t-name="Form">
          <h1>Form</h1>
          <div>
            Text (immediate): <input t-model="state.text"/>
          </div>
          <div>
            Other text (lazy): <input t-model.lazy="state.othertext"/>
          </div>
          <div>
            Number: <input  t-model.number="state.number"/>
          </div>
          <div>
            Boolean: <input  type="checkbox" t-model="state.bool"/>
          </div>
          <div>
            Color, with a select:
            <select  t-model="state.color">
              <option value="">Select a color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
            </select>
          </div>
          <div>
            Color, with radio buttons:
            <span><input type="radio" name="color" id="red" value="red" t-model="state.color"/><label for="red">Red</label></span>
            <span><input type="radio" name="color" id="blue" value="blue" t-model="state.color"/><label for="blue">Blue</label></span>
          </div>
          <hr/>
          <h1>State</h1>
          <div>Text: <t t-esc="state.text"/></div>
          <div>Other Text: <t t-esc="state.othertext"/></div>
          <div>Number: <t t-esc="state.number"/></div>
          <div>Boolean: <t t-if="state.bool">True</t><t t-else="">False</t></div>
          <div>Color: <t t-esc="state.color"/></div>
        </div>
      </div>
    </div>
  `;

  number = useState({ value: 0 });

  increment(number) {
    if (number==1) {
      this.number.value++;
    } else{
      this.number.value--;
    }
  }

  state = useState({ word: 'Hello' });
  
  toggle() {
        this.state.word = this.state.word === 'Hi' ? 'Hello' : 'Hi';
    }
}

function start() {

  const app = new App();
  app.mount(document.getElementById("formBinding"));

}

whenReady(start);
