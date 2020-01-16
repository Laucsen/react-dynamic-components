import { Store } from '../..';
import { StructureBase, DataConfig } from '../../Core/interfaces';
export interface RootContainerStructure {
    root: StructureBase;
}
export interface RootContainerProps {
    structure: RootContainerStructure;
    store: Store;
    rootData: DataConfig;
}
