import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./pageLinkNavigationMixin.html";
import { NavigationMixin } from 'lwr/navigation';

class PageLink extends NavigationMixin(LightningElement) {
  constructor(...args) {
    super(...args);
    this.label = void 0;
    this.pageReference = void 0;
    this.path = void 0;
  }

  async connectedCallback() {
    if (this.pageReference) {
      this[NavigationMixin.GenerateUrl](this.pageReference).then(url => {
        this.path = url;
      });
    }
  }

  handleClick(event) {
    // Navigate when the link is clicked
    event.preventDefault();

    if (this.pageReference) {
      this[NavigationMixin.Navigate](this.pageReference);
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
  }
});

export default _registerComponent(PageLink, {
  tmpl: _tmpl
});