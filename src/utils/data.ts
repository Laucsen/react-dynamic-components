import { CoreBaseState } from '../Core/interfaces';

export const convertData = (structure: string, data: string): CoreBaseState => {
  const parsedStructure = JSON.parse(structure);
  const parsedData = JSON.parse(data);

  // Validate
  console.log(parsedStructure);

  return {
    structure: parsedStructure,
    data: parsedData,
  };
};
