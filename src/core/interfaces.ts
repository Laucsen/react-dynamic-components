// State related
interface Components {
  [index: string]: any;
}

export interface State {
  components: Components;
}

export interface DataMap {
  [index: string]: any;
}

export interface Data {
  data: DataMap;
}

export interface Store {
  getState: () => State;
  registerComponent: (name: string, component: any) => void;
  build: (structure: object, data: object) => any;
}

// Core Component related
export interface CoreProps {
  structure: string;
  data: string;
  store: Store;
}

export interface CoreBaseState {
  structure: object;
  data: Data;
}
