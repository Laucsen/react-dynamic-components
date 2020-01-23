import { createGlobalStyle } from 'styled-components';

import { RdcTheme } from './interfaces';

const GlobalStyles = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Josefin+Slab&display=swap);
  body {
		font-family: 'Josefin Slab', serif;
		font-size: 16px;
  }
`;

const theme: RdcTheme = {
  global: GlobalStyles,
  colors: {
    'c-1': '#75DDDD',
    'c-2': '#508991',
    'c-3': '#172A3A',
    'c-4': '#004346',
    'c-5': '#09BC8A',
  },
  zIndex: {
    base: '0',
    content: '1',
  },
};
export default theme;
