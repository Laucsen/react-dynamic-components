import { RdcTheme } from '../Core/themes/interfaces';
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
