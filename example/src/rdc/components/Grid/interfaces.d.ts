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
interface GeidStructure {
    name: string;
    type: string;
    items: RowStructure[][];
}
export interface GridProps {
    structure: GeidStructure;
    data: object;
    store: Store;
}
export {};
