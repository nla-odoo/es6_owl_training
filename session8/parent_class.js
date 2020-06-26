const { onMounted, onPatched } = owl.hooks;
const { Component, useState, tags } = owl;
const { xml, css } = tags;
const { useRef } = owl.hooks;

class Parentcom extends Component {

    constructor()
    {
            super(...arguments);
            
          /*  this.APP_TEMPLATE = xml`
            <div>
            <input t-ref="input"/>
            <button t-on-click="addinto_list">Click</button>
            <SubComponent t-ref="SubCom" />
            </div>`;

            Parentcom.template = this.APP_TEMPLATE;*/
            this.items=[1,2,3];
    }

   
   
    set_props() {
            this.props=this.items;
            console.log("\n\n\n\n\n........",this);
    }

 }