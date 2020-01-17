import { Store, DefaultConfigStyles } from '../..';
import { StructureBase, DataConfig } from '../../Core/interfaces';
export interface RootContainerStructure extends DefaultConfigStyles {
    root: StructureBase;
}
export interface RootContainerProps {
    structure: RootContainerStructure;
    store: Store;
    rootData: DataConfig;
}
