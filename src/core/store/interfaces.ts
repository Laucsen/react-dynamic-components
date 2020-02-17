import { StructureError } from '../errors';

// Error analysis related
export interface StructureAnalysis {
  currentStructure: any;
  currentType: string;
}

// State related
interface ComponentsIndex {
  [index: string]: any; // Any react compoment. Maybe it is possible to add React Types here.
}

interface StructuresIndex {
  [index: string]: any; // Each component has its structure.
}

interface DataSchemaIndex {
  [index: string]: any; // Each component has its own data.
}

export interface StructureBase {
  name: string;
  type: string;
}

export type GetChildren = (structure: any) => StructureBase[] | null;

export interface ComponentOptions {
  childrens?: GetChildren;
}

interface GetChildrenIndex {
  [index: string]: GetChildren;
}

export interface State {
  components: ComponentsIndex;
  structuresSchemas: StructuresIndex;
  dataSchema: DataSchemaIndex;
  childrens: GetChildrenIndex;
}

export interface Data {
  [index: string]: any; // Any because each component has a type...
}

export interface DataConfig {
  data: Data;
}

export interface Store {
  getState: () => State;
  registerComponent: (
    name: string,
    component: any,
    structure: any,
    componentDataSchema: any | null,
    options: ComponentOptions | null,
  ) => void;
  build: (structure: StructureBase) => any;
  validateStructure: (structur: any) => StructureError[];
  appendDataToContainer: (root: React.ReactElement, rootData: DataConfig | null) => React.ReactElement | null;
  buildAppendDataToContainer: (structure: StructureBase, rootData: DataConfig | null) => React.ReactElement | null;
}
