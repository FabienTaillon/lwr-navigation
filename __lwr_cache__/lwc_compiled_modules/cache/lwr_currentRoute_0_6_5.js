import { generateContextualWireAdapter, ContextInfo } from 'lwr/contextUtils';
const CURRENT_ROUTE_CONTEXT = new ContextInfo(undefined);
/**
 * Services @wire(CurrentRoute) requests.
 * Hooks up to an Observable from the current navigation context.
 */

export const CurrentRoute = generateContextualWireAdapter(CURRENT_ROUTE_CONTEXT);