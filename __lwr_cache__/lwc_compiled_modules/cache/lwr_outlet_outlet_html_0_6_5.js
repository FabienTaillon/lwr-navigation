import _implicitStylesheets from "./outlet.css";

import _implicitScopedStylesheets from "./outlet.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {s: api_slot, h: api_element, dc: api_dynamic_component, f: api_flatten} = $api;
  return [api_element("div", {
    attrs: {
      "role": "alert"
    },
    key: 0
  }, [$cmp.hasError ? api_slot("error", {
    attrs: {
      "name": "error"
    },
    key: 1
  }, [], $slotset) : null]), api_element("div", {
    attrs: {
      "role": "region",
      "tabindex": "-1"
    },
    key: 2
  }, api_flatten([api_dynamic_component("lwr-dynamic", $cmp.viewCtor, {
    key: 3
  }, [])]))];
}
export default registerTemplate(tmpl);
tmpl.slots = ["error"];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lwr-outlet_outlet"
