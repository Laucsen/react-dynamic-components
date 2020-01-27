import React, { Context } from 'react';
import { Store } from './store';

export const createElementWithProps = (Element: any, structure: object, data: any, rootData: object) => (
  <Element structure={structure} data={data} rootData={rootData} />
);

export const createContextConsumer = (ContextElement: Context<Store>, WrappedComponent: any, props: any) => {
  return (
    <ContextElement.Consumer>{(store: Store) => <WrappedComponent {...props} store={store} />}</ContextElement.Consumer>
  );
};
