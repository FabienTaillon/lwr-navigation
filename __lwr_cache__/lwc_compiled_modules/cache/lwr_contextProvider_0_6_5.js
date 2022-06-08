import { createContextProvider } from 'lwc';
import { CurrentPageReference, CurrentRoute, CurrentView, NavigationContext } from 'lwr/navigation';
export const currentRouteContextualizer = createContextProvider(CurrentRoute);
export const currentPageReferenceContextualizer = createContextProvider(CurrentPageReference);
export const currentViewContextualizer = createContextProvider(CurrentView);
export const navigationContextContextualizer = createContextProvider(NavigationContext);
/**
 *
 * @param {TContext} contextValue - Context API object
 * @param {EventTarget} providerNode - Context DOM element
 * @param {Contextualizer} contextualizer - Function for providing this context to subtree nodes wired to a specific adapter
 * @param {ContextualWireAdapter<TContext, TEmit, TConfig>} contextualAdapter - Contextual wire adapter capable of subscribing to context changes
 */

export function provideContext(contextValue, providerNode, contextualizer, contextualAdapter) {
  // Set up provider to give context to wire adpaters so that a component connected
  // under the providerNode subtree and wired to those adapters will receive this id
  contextualAdapter.setContext(providerNode, contextValue);
  contextualizer(providerNode, {
    consumerConnectedCallback: contextualAdapter.subscribeContext.bind(contextualAdapter, providerNode),
    consumerDisconnectedCallback: contextualAdapter.unsubscribeContext.bind(contextualAdapter, providerNode)
  });
}