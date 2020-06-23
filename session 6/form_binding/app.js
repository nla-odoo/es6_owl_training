function App(){
    const {useState,Component}= owl;

    class formBinding extends Component {
        constructor(){
            super(...arguments);
            this.initialState = useState({
                name: "",
                lname: "",
                phoneNo: "",
                bool: false,
            });

        }
    }

    const form = new formBinding();
    form.mount(document.body);

}

async function start() {
  let templates;
  try {
    templates = await owl.utils.loadFile('app.xml');
  } catch(e) {
    console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
    return;
  }
  const env =  { qweb: new owl.QWeb({templates})};
  owl.Component.env = env;
  await owl.utils.whenReady();
  App();
}

start();
