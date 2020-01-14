import Ajv from 'ajv';

import { Store, State, GetChildren, StructureBase, StructureError, Data } from './interfaces';
import { createElement } from './wrappers';
import { formatStructureErrors } from './errors';

const isRoot = (structure: any) => {
  return structure.type === undefined && structure.root !== undefined;
};

const getComponentTypeFromStructure = (structure: any): string => {
  if (isRoot(structure)) {
    return 'RootContainer';
  }
  return structure.type;
};

const getComponentNameFromStructure = (structure: any): string => {
  if (isRoot(structure)) {
    return 'root';
  }
  return structure.name;
};

const createStore = (): Store => {
  const state: State = {
    data: {},
    components: {},
    structuresSchemas: {},
    dataSchema: {},
    childrens: {},
  };

  const getState = () => Object.freeze({ ...state });

  const storeData = (data: Data) => {
    state.data = {
      ...state.data,
      ...data.data,
    };
  };

  const registerComponent = (
    name: string,
    component: any,
    componentStructureSchema: any,
    componentDataSchema: any | null = null,
    compoentChildrens: GetChildren = () => null,
  ) => {
    state.components[name] = component;
    state.structuresSchemas[name] = componentStructureSchema;
    state.dataSchema[name] = componentDataSchema;
    state.childrens[name] = compoentChildrens;
  };

  const build = (structure: StructureBase) => {
    const type = getComponentTypeFromStructure(structure);
    const currentData = state.data[structure.name];
    const Element = state.components[type];
    return createElement(Element, structure, currentData);
  };

  interface StructureAnalysis {
    currentStructure: any;
    currentType: string;
  }

  const validateStructure = (structure: any): StructureError[] => {
    const ajv = new Ajv();

    const componentType = getComponentTypeFromStructure(structure);

    const toAnalyze: StructureAnalysis[] = [
      {
        currentType: componentType,
        currentStructure: structure,
      },
    ];

    while (toAnalyze.length !== 0) {
      const currentItem = toAnalyze[0];
      toAnalyze.shift();

      const structureSchema = state.structuresSchemas[currentItem.currentType];
      if (!structureSchema) {
        return [
          {
            name: getComponentNameFromStructure(currentItem.currentStructure),
            component: currentItem.currentType,
            message: 'Component not Registered',
          },
        ];
      }

      const validate = ajv.compile(structureSchema);
      const result = validate(currentItem.currentStructure);
      if (!result) {
        return formatStructureErrors(
          currentItem.currentType,
          getComponentNameFromStructure(currentItem.currentStructure),
          validate.errors,
        );
      }

      const getChildrens = state.childrens[currentItem.currentType];
      const childrens = getChildrens(currentItem.currentStructure);

      if (childrens) {
        const futureAnalysis = childrens.map(
          (child: StructureBase): StructureAnalysis => {
            return {
              currentType: child.type,
              currentStructure: child,
            };
          },
        );
        toAnalyze.push(...futureAnalysis);
      }
    }

    return [];
  };

  return { getState, registerComponent, build, validateStructure, storeData };
};

export default createStore;
