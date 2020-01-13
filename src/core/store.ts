import React from 'react';

import createStore from './createStore';

import { createContextConsumer } from './wrappers';

const globalStore = createStore();
const StoreContext = React.createContext(globalStore);

const connectController = (Component: any) => (props: any) => createContextConsumer(StoreContext, Component, props);

const register = (componentName: string, componentStructureSchema: any = {}) => (Component: any) => {
  const consumerBuilder = (props: any) => createContextConsumer(StoreContext, Component, props);
  globalStore.registerComponent(componentName, consumerBuilder, componentStructureSchema);
  return consumerBuilder;
};

export { register, connectController };
