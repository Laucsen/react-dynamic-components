import { Store } from '../..';
interface TextStructure {
    name: string;
    type: string;
    typography: string;
}
export interface TextProps {
    structure: TextStructure;
    data: string;
    store: Store;
}
export interface StyledTextProps {
    typography: string;
    children: string;
}
export {};
