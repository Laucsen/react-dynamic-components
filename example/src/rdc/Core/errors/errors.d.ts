import { ErrorObject } from 'ajv';
import { StructureError, ErrorTemplate } from './interfaces';
import { Data } from '../..';
export declare const formatStructureErrors: (componentType: string, componentName: string, errors: ErrorObject[] | null | undefined) => StructureError[];
export declare const getErrorsStructureAndData: (errors: StructureError[]) => {
    structure: ErrorTemplate;
    data: Data;
};
