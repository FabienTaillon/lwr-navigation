import _tmpl from "./detail2.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";

class Detail extends LightningElement {}

export default _registerComponent(Detail, {
  tmpl: _tmpl
});