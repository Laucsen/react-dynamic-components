interface Components {
    [index: string]: any;
}
interface Structures {
    [index: string]: any;
}
export interface State {
    components: Components;
    structures: Structures;
}
export interface Data {
    [index: string]: any;
}
export interface DataConfig {
    data: Data;
}
export interface Store {
    getState: () => State;
    registerComponent: (name: string, component: any, structure: any) => void;
    build: (structure: object, data: object) => any;
    validateStructure: (structur: any) => any[];
}
export interface CoreProps {
    structure: string;
    data: string;
    store: Store;
}
export interface CoreBaseState {
    structure: object;
    data: DataConfig;
}
export {};
