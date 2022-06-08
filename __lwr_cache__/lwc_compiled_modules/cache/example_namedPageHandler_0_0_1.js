import { registerDecorators as _registerDecorators, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./namedPageHandler.html";

class NamedPageHandler {
  constructor(callback) {
    this.callback = void 0;
    this.callback = callback;
  }

  dispose() {
    /* noop */
  }

  update({
    attributes
  }) {
    let viewGetter; // Get the "pageName" from the incoming page reference

    switch (attributes.pageName) {
      case 'detail':
        viewGetter = () => import('example/detail');

        break;

      case 'detail2':
        viewGetter = () => import('example/detail2');

        break;

      default:
        return;
    }

    this.callback({
      viewset: {
        default: viewGetter
      }
    });
  }

}

_registerDecorators(NamedPageHandler, {
  fields: ["callback"]
});

export default _registerComponent(NamedPageHandler, {
  tmpl: _tmpl
});