import { GlobalStyleComponent, DefaultTheme, ThemedStyledFunction } from 'styled-components';

interface RdcThemeColorIndex {
  [index: string]: string;
}

interface ZIndexIndex {
  [index: string]: string;
}

export interface RdcTheme {
  global: GlobalStyleComponent<{}, DefaultTheme>;
  colors: RdcThemeColorIndex;
  zIndex: ZIndexIndex;
}

// Typography
export type Themes =
  | ThemedStyledFunction<'h1', any, {}, never>
  | ThemedStyledFunction<'h2', any, {}, never>
  | ThemedStyledFunction<'h3', any, {}, never>
  | ThemedStyledFunction<'h4', any, {}, never>
  | ThemedStyledFunction<'h5', any, {}, never>
  | ThemedStyledFunction<'h6', any, {}, never>;

interface HeadingsMap {
  [index: string]: Themes;
}

export interface TypographyItems {
  Headings: HeadingsMap;
}
