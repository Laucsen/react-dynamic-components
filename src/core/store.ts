import React from 'react';

import createStore from './createStore';
import { createContextConsumer } from './wrappers';
import { GetChildren } from './interfaces';

const globalStore = createStore();
const StoreContext = React.createContext(globalStore);

const connectController = (Component: any) => (props: any) => createContextConsumer(StoreContext, Component, props);

const register = (
  componentName: string,
  componentStructureSchema: any = {},
  componentDataSchema: any | null = null,
  compoentChildrens: GetChildren = () => null,
) => (Component: any) => {
  const consumerBuilder = (props: any) => createContextConsumer(StoreContext, Component, props);
  globalStore.registerComponent(
    componentName,
    consumerBuilder,
    componentStructureSchema,
    componentDataSchema,
    compoentChildrens,
  );
  return consumerBuilder;
};

export { register, connectController };
