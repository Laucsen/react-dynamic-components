import { StrctureBase } from '../../Core/interfaces';
interface GridComponentStructure {
    component: StrctureBase;
}
interface GridColumnStructure {
    data: GridComponentStructure;
}
interface GridStructure {
    items: GridColumnStructure[][];
}
declare const _default: (structure: GridStructure) => StrctureBase[] | null;
export default _default;
