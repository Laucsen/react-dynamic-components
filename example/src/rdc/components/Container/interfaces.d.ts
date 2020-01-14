import { Store } from '../..';
import { StructureBase } from '../../Core/interfaces';
interface ContainerStrucutre {
    name?: string;
    type: string;
    components: StructureBase[];
}
export interface ContainerProps {
    structure: ContainerStrucutre;
    store: Store;
}
export {};
