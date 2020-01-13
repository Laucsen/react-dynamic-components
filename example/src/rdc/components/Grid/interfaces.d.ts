import { Store } from '../..';
export interface ColumnProps {
    mobile: number;
    tablet: number;
    desktop: number;
}
interface ColumnStructure extends ColumnProps {
    component: object;
}
interface RowStructure {
    data: ColumnStructure;
}
interface CotnainerStructure {
    name: string;
    type: string;
    items: RowStructure[][];
}
export interface ContainerProps {
    structure: CotnainerStructure;
    data: object;
    store: Store;
}
export {};
