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
export interface ErrorLineTemplate {
    data: ErrorData;
}
interface ErrorTemplateRoot {
    name: string;
    type: string;
    items: ErrorLineTemplate[][];
}
export interface ErrorTemplate {
    version: number;
    name: string;
    type?: string;
    title: string;
    root: ErrorTemplateRoot;
}
export interface StructureError {
    name: string;
    component: string;
    message: string;
    schemaPath?: string;
}
export {};
