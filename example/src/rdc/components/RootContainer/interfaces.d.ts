import { Store } from '../..';
import { StrctureBase } from '../../Core/interfaces';
export interface RootContainerStructure {
    root: StrctureBase;
}
export interface RootContainerProps {
    structure: RootContainerStructure;
    data: object;
    store: Store;
}
