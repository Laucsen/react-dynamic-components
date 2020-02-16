import Ajv from 'ajv';

import { formatStructureErrors, StructureError } from '../errors';
import { createElementWithProps, cloneElement } from '../wrappers';

import { Store, State, ComponentOptions, StructureBase, StructureAnalysis, DataConfig } from './interfaces';

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

// Dummy children getter.
const dumnyChildrens = () => null;

const createStore = (): Store => {
  const state: State = {
    components: {},
    structuresSchemas: {},
    dataSchema: {},
    childrens: {},
  };

  const getState = () => Object.freeze({ ...state });

  const registerComponent = (
    name: string,
    component: any,
    componentStructureSchema: any,
    componentDataSchema: any | null = null,
    options: ComponentOptions | null = null,
  ) => {
    // Register component
    state.components[name] = component;
    state.structuresSchemas[name] = componentStructureSchema;
    state.dataSchema[name] = componentDataSchema;
    if (options) {
      state.childrens[name] = options.childrens || dumnyChildrens;
    } else {
      state.childrens[name] = dumnyChildrens;
    }
  };

  const build = (structure: StructureBase) => {
    const type = getComponentTypeFromStructure(structure);
    const Element = state.components[type];
    return createElementWithProps(Element, structure);
  };

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

  const appendDataToContainer = (
    RootElement: React.ReactElement,
    rootData: DataConfig | null,
    data: any | null = null,
  ): React.ReactElement | null => {
    return cloneElement(RootElement, rootData, data);
  };

  const buildAppendDataToContainer = (structure: StructureBase, rootData: DataConfig | null) => {
    const componentData = rootData && rootData.data ? rootData.data[structure.name] : null;
    return appendDataToContainer(build(structure), rootData, componentData);
  };

  return { getState, registerComponent, build, validateStructure, appendDataToContainer, buildAppendDataToContainer };
};

export default createStore;
