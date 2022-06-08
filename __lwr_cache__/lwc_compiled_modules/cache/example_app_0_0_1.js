import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./app.html";
import { createRouter } from 'lwr/router'; // Route definition array

const routes = [{
  id: 'home',
  uri: '/',
  handler: () => import('example/homePageHandler'),
  page: {
    type: 'home'
  }
}, {
  id: 'namedPage',
  uri: '/:pageName',
  handler: () => import('example/namedPageHandler'),
  page: {
    type: 'namedPage',
    attributes: {
      pageName: ':pageName'
    }
  }
}];

class HelloWorldApp extends LightningElement {
  constructor(...args) {
    super(...args);
    this.router = createRouter({
      routes
    });
    this.homeReference = {
      type: 'home'
    };
    this.detailReference = {
      type: 'namedPage',
      attributes: {
        pageName: 'detail'
      }
    };
    this.detail2Reference = {
      type: 'namedPage',
      attributes: {
        pageName: 'detail2'
      }
    };
  }

}

_registerDecorators(HelloWorldApp, {
  fields: ["router", "homeReference", "detailReference", "detail2Reference"]
});

export default _registerComponent(HelloWorldApp, {
  tmpl: _tmpl
});