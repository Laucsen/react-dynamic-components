import { RdcTheme } from '../themes/interfaces';

export interface StyledBackgrond {
  color?: string;
  image?: string;
  gradient?: string;
}

export interface RdcStyledProps {
  theme?: RdcTheme;
  background?: StyledBackgrond;
}
