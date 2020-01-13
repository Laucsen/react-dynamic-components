import Ajv from 'ajv';

import { Store, State } from './interfaces';
import { createElement } from './wrappers';
import { formatStructureErrors } from './errors';

const isRoot = (structure: any) => {
  return structure.type === undefined && structure.root !== undefined;
};

const getComponentNameFromStructure = (structure: any) => {
  if (isRoot(structure)) {
    return 'RootContainer';
  }
  return structure.type;
};

const createStore = (): Store => {
  const state: State = {
    components: {},
    structures: {},
  };

  const getState = () => Object.freeze({ ...state });

  const registerComponent = (name: string, component: any, componentStructureSchema: any) => {
    state.components[name] = component;
    state.structures[name] = componentStructureSchema;
  };

  const build = (structure: object, data: object) => {
    const name = getComponentNameFromStructure(structure);
    const Element = state.components[name];
    return createElement(Element, structure, data);
  };

  const validateStructure = (structure: any) => {
    const componentName = getComponentNameFromStructure(structure);
    const structureSchema = state.structures[componentName];

    console.log('---');
    console.log(componentName);
    console.log(structure);
    console.log(structureSchema);
    console.log('...');

    const ajv = new Ajv();
    const validate = ajv.compile(structureSchema);
    const result = validate(structure);
    if (!result) {
      return formatStructureErrors(componentName, validate.errors);
    }
    console.log(result);
    console.log('...');

    // TODO: Cascading. How to validate other elements.

    return [];
  };

  return { getState, registerComponent, build, validateStructure };
};

export default createStore;
