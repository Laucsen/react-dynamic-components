import { Store, StructureBase, DataConfig } from './store';
export interface CoreProps {
    structure: string;
    data: string;
    store: Store;
}
export interface CoreState {
    structure: StructureBase;
    data: DataConfig;
}
