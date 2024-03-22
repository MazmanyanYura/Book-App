import "../static/reset.css";
import "../static/global.css";
import "../src/app.css";
import { MainView } from "./views/main/main.js";
class App {
  routes = [
    {
      path: "",
      view: MainView,
    },
  ];
  constructor() {
    window.addEventListener("hashchange", this.route.bind(this));
  }
  route() {
    if (this.currentView) this.currentView.destroy();

    const view = this.routes.find((r) => r.path === location.hash).view;
    this.currentView = new view();
    this.currentView.render();
    this.currentView.render();
  }
}
new App().route();
