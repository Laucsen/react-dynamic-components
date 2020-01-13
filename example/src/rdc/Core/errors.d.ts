import { ErrorObject } from 'ajv';
import { StructureError, Data } from './interfaces';
export declare const formatStructureErrors: (componentType: string, componentName: string, errors: ErrorObject[] | null | undefined) => StructureError[];
interface ErrorComponentData {
    type: string;
    name: string;
}
interface ErrorContainer {
    type: string;
    components: ErrorComponentData[];
}
interface ErrorData {
    mobile: number;
    tablet: number;
    desktop: number;
    component: ErrorContainer;
}
interface ErrorLineTemplate {
    data: ErrorData;
}
interface ErrorTemplateRoot {
    name: string;
    type: string;
    items: ErrorLineTemplate[][];
}
interface ErrorTemplate {
    version: number;
    name: string;
    title: string;
    root: ErrorTemplateRoot;
}
export declare const getErrorsStructureAndData: (errors: StructureError[]) => {
    structure: ErrorTemplate;
    data: Data;
};
export {};
