import React from 'react';

import { Store, State } from './interfaces';

const getComponentNameFromStructure = (structure: any) => {
  if (structure.type === undefined && structure.root !== undefined) {
    return 'RootContainer';
  }
  return structure.type;
};

const createStore = (): Store => {
  const state: State = {
    components: {},
  };

  const getState = () => Object.freeze({ ...state });

  const registerComponent = (name: string, component: any) => {
    state.components[name] = component;
  };

  const build = (structure: object, data: object) => {
    const name = getComponentNameFromStructure(structure);
    const Element = state.components[name];
    return <Element structure={structure} data={data} />;
  };

  return { getState, registerComponent, build };
};

const globalStore = createStore();
const StoreContext = React.createContext(globalStore);

const connectController = (Component: any) => {
  const builder = (props: any) => (
    <StoreContext.Consumer>{store => <Component {...props} store={store} />}</StoreContext.Consumer>
  );
  return builder;
};

const register = (componentName: string) => (Component: any) => {
  const consumerBuilder = (props: any) => (
    <StoreContext.Consumer>{store => <Component {...props} store={store} />}</StoreContext.Consumer>
  );
  globalStore.registerComponent(componentName, consumerBuilder);
  return consumerBuilder;
};

export { register, connectController };
