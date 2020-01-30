import { createContext } from 'react';
import { createContextConsumer } from '../wrappers';

import createStore from './createStore';
import { ComponentOptions } from './interfaces';

const globalStore = createStore();
const CurrentContext = createContext(globalStore);

const connectController = (Component: any) => (props: any) => {
  return createContextConsumer(CurrentContext, Component, props);
};

const register = (
  componentName: string,
  componentStructureSchema: any = {},
  componentDataSchema: any | null = null,
  options: ComponentOptions | null = null,
) => (Component: any) => {
  const consumerBuilder = (props: any) => createContextConsumer(CurrentContext, Component, props);
  globalStore.registerComponent(componentName, consumerBuilder, componentStructureSchema, componentDataSchema, options);
  return consumerBuilder;
};

export { register, connectController };
