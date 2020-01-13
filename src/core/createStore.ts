import Ajv from 'ajv';

import { Store, State } from './interfaces';
import { createElement } from './wrappers';
import { formatStructureErrors } from './errors';

const isRoot = (structure: any) => {
  return structure.type === undefined && structure.root !== undefined;
};

const getComponentTypeFromStructure = (structure: any) => {
  if (isRoot(structure)) {
    return 'RootContainer';
  }
  return structure.type;
};

const getComponentNameFromStructure = (structure: any) => {
  if (isRoot(structure)) {
    return 'root';
  }
  return structure.name;
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
    const type = getComponentTypeFromStructure(structure);
    const Element = state.components[type];
    return createElement(Element, structure, data);
  };

  const validateStructure = (structure: any) => {
    const componentType = getComponentTypeFromStructure(structure);
    const structureSchema = state.structures[componentType];

    const ajv = new Ajv();
    const validate = ajv.compile(structureSchema);
    const result = validate(structure);
    if (!result) {
      return formatStructureErrors(componentType, getComponentNameFromStructure(structure), validate.errors);
    }

    // TODO: Cascading. How to validate other elements.

    return [];
  };

  return { getState, registerComponent, build, validateStructure };
};

export default createStore;
