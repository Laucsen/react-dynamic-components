import { Store, StyledBackgrond, RdcTheme, DefaultConfigStyles } from '../..';
import { StructureBase, DataConfig } from '../../Core/interfaces';

export interface ContainerStrucutre extends DefaultConfigStyles {
  name?: string;
  type: string;
  components: StructureBase[];
}

export interface ContainerProps {
  structure: ContainerStrucutre;
  store: Store;
  rootData: DataConfig;
}

export interface ContainerStyleProps {
  theme?: RdcTheme;
  background?: StyledBackgrond;
}
