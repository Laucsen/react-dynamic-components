import { RdcTheme } from '../Core/themes/interfaces';
import { StyledBackgrond, RdcStyledProps } from '../core/styles/interfaces';
import { DefaultConfigStyles } from './interfaces';
export declare const getColorFromTheme: (theme?: RdcTheme | undefined, colorName?: string | undefined) => string | null;
export declare const getBackgroundColor: (theme?: RdcTheme | undefined, background?: StyledBackgrond | undefined) => string | null | undefined;
export declare const getBackgroundImage: (theme?: RdcTheme | undefined, background?: StyledBackgrond | undefined) => string | null | undefined;
export declare const useDefaultStyles: (structure: DefaultConfigStyles) => {
    background: {
        color: string | undefined;
        image: string | undefined;
    };
};
export declare const appendDefaultStyles: (props: RdcStyledProps) => string;
