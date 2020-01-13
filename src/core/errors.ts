import { ErrorObject } from 'ajv';

import { StructureError } from './interfaces';

export const formatStructureErrors = (
  componentName: string,
  errors: null | undefined | Array<ErrorObject>,
): StructureError[] => {
  if (!errors) {
    throw new Error('Invalid error Structure');
  }
  return errors.map((error: ErrorObject) => {
    return {
      component: componentName,
      message: `${error.keyword} ${error.message}`,
      schemaPath: error.schemaPath,
    };
  });
};
