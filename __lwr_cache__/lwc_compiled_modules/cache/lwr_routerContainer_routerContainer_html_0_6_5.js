import _implicitStylesheets from "./routerContainer.css";

import _implicitScopedStylesheets from "./routerContainer.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {s: api_slot, h: api_element} = $api;
  return [api_slot("", {
    key: 0
  }, [], $slotset), api_element("span", {
    attrs: {
      "aria-live": "polite",
      "aria-atomic": "true"
    },
    context: {
      lwc: {
        dom: "manual"
      }
    },
    key: 1
  }, [])];
}
export default registerTemplate(tmpl);
tmpl.slots = [""];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lwr-routerContainer_routerContainer"
