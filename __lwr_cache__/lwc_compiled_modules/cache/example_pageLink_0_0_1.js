import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./pageLink.html";
import { NavigationContext, generateUrl, navigate } from 'lwr/navigation';

class PageLink extends LightningElement {
  constructor(...args) {
    super(...args);
    this.label = void 0;
    this.pageReference = void 0;
    this.path = void 0;
    this.navContext = void 0;
  }

  async connectedCallback() {
    // Add an href to the link anchor
    if (this.pageReference && this.navContext) {
      this.path = generateUrl(this.navContext, this.pageReference) || undefined;
    }
  }

  handleClick(event) {
    // Navigate when the link is clicked
    event.preventDefault();

    if (this.pageReference && this.navContext) {
      navigate(this.navContext, this.pageReference);
    }
  }

}

_registerDecorators(PageLink, {
  publicProps: {
    label: {
      config: 0
    },
    pageReference: {
      config: 0
    }
  },
  track: {
    path: 1
  },
  wire: {
    navContext: {
      adapter: NavigationContext,
      config: function ($cmp) {
        return {};
      }
    }
  }
});

export default _registerComponent(PageLink, {
  tmpl: _tmpl
});