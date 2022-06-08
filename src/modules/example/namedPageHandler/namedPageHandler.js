export default class NamedPageHandler {
    callback;

    constructor(callback) {
        this.callback = callback;
    }

    dispose() {
        /* noop */
    }

    update({ attributes }) {
        let viewGetter;

        // Get the "pageName" from the incoming page reference
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
                default: viewGetter,
            },
        });
    }
}