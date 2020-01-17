import { RdcTheme } from '../Core/themes/interfaces';
import { StyledBackgrond } from '../core/styles/interfaces';
export declare const getColorFromTheme: (theme?: RdcTheme | undefined, colorName?: string | undefined) => string | null;
export declare const getBackgroundColor: (theme?: RdcTheme | undefined, background?: StyledBackgrond | undefined) => string | null | undefined;
