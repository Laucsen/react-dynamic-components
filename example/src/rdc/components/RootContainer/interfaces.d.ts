import { Store } from '../..';
export interface RootContainerStructure {
    root: object;
}
export interface RootContainerProps {
    structure: RootContainerStructure;
    data: object;
    store: Store;
}
