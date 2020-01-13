import { ErrorObject } from 'ajv';

import { StructureError, Data } from './interfaces';

export const formatStructureErrors = (
  componentType: string,
  componentName: string,
  errors: null | undefined | Array<ErrorObject>,
): StructureError[] => {
  if (!errors) {
    throw new Error('Invalid error Structure');
  }
  return errors.map((error: ErrorObject) => {
    return {
      component: componentType,
      name: componentName,
      message: `"${error.keyword}" ${error.message}`,
      schemaPath: error.schemaPath,
    };
  });
};

interface ErrorComponentData {
  type: string;
  name: string;
}

interface ErrorData {
  mobile: number;
  tablet: number;
  desktop: number;
  component?: ErrorComponentData;
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

const errorLineTemplate: ErrorLineTemplate = {
  data: {
    mobile: 6,
    tablet: 12,
    desktop: 12,
  },
};

const errorTemplate: ErrorTemplate = {
  version: 1,
  name: 'error-structure',
  title: 'Mage Sheet Structure',
  root: {
    name: 'error-grid',
    type: 'Grid',
    items: [[]],
  },
};

export const getErrorsStructureAndData = (errors: StructureError[]) => {
  const structure = errorTemplate;
  const conts = errors.map((error: StructureError) => {
    const currentTemplate = errorLineTemplate;
    currentTemplate.data.component = {
      type: 'Text',
      name: error.name,
    };
    return errorLineTemplate;
  });
  structure.root.items[0] = conts;

  const data = errors.reduce((acc: Data, error: StructureError): Data => {
    acc[error.name] = error.message;
    return acc;
  }, {});

  return {
    structure,
    data,
  };
};
