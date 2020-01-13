import { StrctureBase } from '../../Core/interfaces';

interface GridComponentStructure {
  component: StrctureBase;
}

interface GridColumnStructure {
  data: GridComponentStructure;
}

interface GridStructure {
  items: GridColumnStructure[][];
}

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
