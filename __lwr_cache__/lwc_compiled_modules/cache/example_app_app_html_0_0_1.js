import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import _examplePageLink from "example/pageLink";
import _examplePageLinkNavigationMixin from "example/pageLinkNavigationMixin";
import _lwrOutlet from "lwr/outlet";
import _lwrRouterContainer from "lwr/routerContainer";
import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element, t: api_text} = $api;
  return [api_custom_element("lwr-router-container", _lwrRouterContainer, {
    props: {
      "router": $cmp.router
    },
    key: 0
  }, [api_element("div", {
    styleDecls: [["margin-bottom", "20px", false]],
    key: 1
  }, [api_custom_element("example-page-link", _examplePageLink, {
    props: {
      "label": "Home",
      "pageReference": $cmp.homeReference
    },
    key: 2
  }, []), api_custom_element("example-page-link", _examplePageLink, {
    styleDecls: [["margin-left", "10px", false]],
    props: {
      "label": "Detail",
      "pageReference": $cmp.detailReference
    },
    key: 3
  }, []), api_custom_element("example-page-link-navigation-mixin", _examplePageLinkNavigationMixin, {
    styleDecls: [["margin-left", "10px", false]],
    props: {
      "label": "Detail via Mixin",
      "pageReference": $cmp.detail2Reference
    },
    key: 4
  }, [])]), api_custom_element("lwr-outlet", _lwrOutlet, {
    key: 5
  }, [api_element("div", {
    attrs: {
      "slot": "error"
    },
    key: 6
  }, [api_text("This content failed to display.")])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "example-app_app"
