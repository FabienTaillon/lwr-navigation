import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lwr/navigation';

export default class PageLink extends NavigationMixin(LightningElement) {
    @api label;
    @api pageReference;
    @track path;

    async connectedCallback() {
        if (this.pageReference) {
            this[NavigationMixin.GenerateUrl](this.pageReference).then((url) => {
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