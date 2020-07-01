import { App } from "./application.js";

function setup() {
  const app = new App();
  app.mount(document.body);
}

owl.utils.whenReady(setup);
