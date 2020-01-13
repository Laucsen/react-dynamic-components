import React from 'react';

import { Store } from './interfaces';

export const createElement = (Element: any, structure: object, data: object) => (
  <Element structure={structure} data={data} />
);

export const createContextConsumer = (StoreContext: any, Component: any, props: any) => (
  <StoreContext.Consumer>{(store: Store) => <Component {...props} store={store} />}</StoreContext.Consumer>
);
