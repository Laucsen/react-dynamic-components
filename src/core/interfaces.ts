// State related
interface ComponentsIndex {
  [index: string]: any;
}

interface StructuresIndex {
  [index: string]: any;
}

interface DataSchemaIndex {
  [index: string]: any;
}

export interface StrctureBase {
  name: string;
  type: string;
}

export type GetChildren = (structure: any) => StrctureBase[] | null;

interface GetChildrenIndex {
  [index: string]: GetChildren;
}

export interface State {
  components: ComponentsIndex;
  structures: StructuresIndex;
  dataSchema: DataSchemaIndex;
  childrens: GetChildrenIndex;
}

export interface Data {
  [index: string]: any;
}

export interface DataConfig {
  data: Data;
}

export interface StructureError {
  name: string;
  component: string;
  message: string;
  schemaPath: string;
}

export interface Store {
  getState: () => State;
  registerComponent: (
    name: string,
    component: any,
    structure: any,
    componentDataSchema: any | null,
    compoentChildrens: GetChildren,
  ) => void;
  build: (structure: object, data: object) => any;
  validateStructure: (structur: any) => StructureError[];
}

// Core Component related
export interface CoreProps {
  structure: string;
  data: string;
  store: Store;
}

export interface CoreBaseState {
  structure: object;
  data: DataConfig;
}
