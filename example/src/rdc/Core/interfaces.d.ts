interface ComponentsIndex {
    [index: string]: any;
}
interface StructuresIndex {
    [index: string]: any;
}
interface DataSchemaIndex {
    [index: string]: any;
}
export interface StructureBase {
    name: string;
    type: string;
}
export declare type GetChildren = (structure: any) => StructureBase[] | null;
interface GetChildrenIndex {
    [index: string]: GetChildren;
}
export interface Data {
    [index: string]: any;
}
export interface State {
    components: ComponentsIndex;
    structuresSchemas: StructuresIndex;
    dataSchema: DataSchemaIndex;
    childrens: GetChildrenIndex;
}
export interface DataConfig {
    data: Data;
}
export interface StructureError {
    name: string;
    component: string;
    message: string;
    schemaPath?: string;
}
export interface Store {
    getState: () => State;
    registerComponent: (name: string, component: any, structure: any, componentDataSchema: any | null, compoentChildrens: GetChildren) => void;
    build: (structure: StructureBase, data: DataConfig) => any;
    validateStructure: (structur: any) => StructureError[];
}
export interface CoreProps {
    structure: string;
    data: string;
    store: Store;
}
export interface CoreState {
    structure: StructureBase;
    data: DataConfig;
}
export {};
