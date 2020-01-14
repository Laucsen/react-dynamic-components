import { StrctureBase } from '../..';

import { GridStructure, GridColumnStructure } from './interfaces';

export default (structure: GridStructure): StrctureBase[] | null => {
  const mapped = structure.items
    .reduce((acc: GridColumnStructure[], items: GridColumnStructure[]) => {
      acc.push(...items);
      return acc;
    }, [])
    .map((items: GridColumnStructure) => {
      return items.data.component;
    });
  return mapped;
};
