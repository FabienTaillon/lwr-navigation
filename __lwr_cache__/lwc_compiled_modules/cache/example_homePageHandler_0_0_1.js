import { registerDecorators as _registerDecorators, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./homePageHandler.html";

class HomePageHandler {
  constructor(callback) {
    this.callback = void 0;
    this.callback = callback;
  }

  dispose() {
    /* noop */
  }

  update() {
    this.callback({
      viewset: {
        default: () => import('example/home')
      }
    });
  }

}

_registerDecorators(HomePageHandler, {
  fields: ["callback"]
});

export default _registerComponent(HomePageHandler, {
  tmpl: _tmpl
});