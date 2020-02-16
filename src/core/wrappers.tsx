import React, { Context } from 'react';
import { Store, DataConfig } from './store';

export const createElementWithProps = (Element: any, structure: object) => {
  return <Element structure={structure} />;
};

export const createContextConsumer = (ContextElement: Context<Store>, WrappedComponent: any, props: any) => {
  return (
    <ContextElement.Consumer>{(store: Store) => <WrappedComponent {...props} store={store} />}</ContextElement.Consumer>
  );
};

export const cloneElement = (Element: React.ReactElement, rootData: DataConfig | null, data: any | null) => {
  return React.cloneElement(Element, {
    rootData: rootData,
    data: data,
  });
};
