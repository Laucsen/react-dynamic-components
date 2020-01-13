import { Store, Data } from '../..';
interface ContainerStrucutre {
    name?: string;
    type: string;
    components: object[];
}
export interface ContainerProps {
    structure: ContainerStrucutre;
    data: Data;
    store: Store;
}
export {};
