import _tmpl from "./home.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";

class Home extends LightningElement {}

export default _registerComponent(Home, {
  tmpl: _tmpl
});