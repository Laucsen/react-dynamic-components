import { Store } from '../..';
interface TextStructure {
    name: string;
    type: string;
}
export interface TextProps {
    structure: TextStructure;
    data: string;
    store: Store;
}
export {};
