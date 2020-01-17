import { RdcTheme } from '../Core/themes/interfaces';

import { DefaultConfigStyles } from './interfaces';
import { StyledBackgrond } from '../core/styles/interfaces';

export const getColorFromTheme = (theme?: RdcTheme, colorName?: string) => {
  if (theme && colorName) {
    return theme.colors[colorName];
  }
  return null;
};

export const getBackgroundColor = (theme?: RdcTheme, background?: StyledBackgrond) => {
  if (!theme || !background) {
    return null;
  }

  const color = getColorFromTheme(theme, background.color);
  return color || background.color;
};

export const useDefaultStyles = (structure: DefaultConfigStyles) => {
  return {
    background: {
      color: structure.background ? structure.background.color : '',
    },
  };
};
