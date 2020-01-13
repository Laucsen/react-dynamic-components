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

const errorLineTemplate: ErrorLineTemplate = {
  data: {
    mobile: 6,
    tablet: 12,
    desktop: 12,
    component: {
      type: 'Container',
      components: [],
    },
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
  const conts = errors.map((error: StructureError) => {
    const currentTemplate = errorLineTemplate;
    currentTemplate.data.component.components.push(
      ...[
        {
          type: 'Text',
          name: error.name,
        },
        {
          type: 'Text',
          name: `${error.name}-component`,
        },
        {
          type: 'Text',
          name: `${error.name}- schemaPath`,
        },
      ],
    );
    return errorLineTemplate;
  });

  const structure = errorTemplate;
  structure.root.items[0] = conts;

  const data = errors.reduce((acc: Data, error: StructureError): Data => {
    acc[error.name] = error.message;
    acc[`${error.name}-component`] = error.component;
    acc[`${error.name}- schemaPath`] = error.schemaPath;
    return acc;
  }, {});

  console.log('---');
  console.log(data);

  return {
    structure,
    data,
  };
};
