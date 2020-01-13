import { ErrorObject } from 'ajv';
import { StructureError } from './interfaces';
export declare const formatStructureErrors: (componentName: string, errors: ErrorObject[] | null | undefined) => StructureError[];
