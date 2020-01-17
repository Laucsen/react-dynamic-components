import { RdcTheme } from '../Core/themes/interfaces';
import { StyledBackgrond, RdcStyledProps } from '../core/styles/interfaces';

import { DefaultConfigStyles } from './interfaces';

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

export const getBackgroundImage = (theme?: RdcTheme, background?: StyledBackgrond) => {
  if (!theme || !background) {
    return null;
  }
  return background.image;
};

export const useDefaultStyles = (structure: DefaultConfigStyles) => {
  return {
    background: {
      color: structure.background ? structure.background.color : '',
      image: structure.background ? structure.background.image : '',
    },
  };
};

export const appendDefaultStyles = (props: RdcStyledProps) => {
  let result = '';

  const color = getBackgroundColor(props.theme, props.background);
  if (color) {
    result += `background-color: ${color};`;
  }

  const image = getBackgroundImage(props.theme, props.background);
  if (image) {
    result += `
			background-image: url("${image}");
			background-size: cover;
		`;
  }

  return result;
};
