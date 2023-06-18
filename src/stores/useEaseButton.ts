import { defineStore } from "pinia";
import { convertToHex, hexToRgba } from "../utilities/color";

export interface IButtonStyle {
    color?: string | null;
    bgColor?: string | null;
    border?: string | null;
    borderRadius?: string | null;
    outlineStyle?: string | null;
    outlineColor?: string | null;
    outlineColorOpacity?: number | null;
    textDecoration?: string | null;
    classes?: string | null;
}

export interface IButtonVariant {
    [key: string]: IButtonStyle;
}

export const defaultStyle: IButtonStyle = {
    color: "#fff",
    bgColor: "#1d4ed8",
    borderRadius: "0.2rem",
    outlineStyle: 'solid',
    outlineColor: "#1d4ed8",
    outlineColorOpacity: 0.5,
    textDecoration: 'normal',
};

export const defaultVariant: IButtonVariant = {};

export const useEaseButton = defineStore('ease-button', {
    state: (): { style: IButtonStyle; variant: IButtonVariant } => ({
        style: defaultStyle,
        variant: defaultVariant
    }),
    actions: { 
        defaultStyle(style: IButtonStyle) {
            this.style = { ...defaultStyle, ...style };
        },
        addVariant(variant: IButtonVariant) {
            const { color, bgColor, outlineColor } = this.getStyles();

            this.variant = {
                ...defaultVariant,
                ...variant,
                primary: { color, bgColor },
                secondary: { color: bgColor, border: `2px solid ${bgColor}` },
                link: { color: bgColor, textDecoration: 'underline' }
            };

            for (const key in this.variant) {
                if (Object.prototype.hasOwnProperty.call(this.variant, key)) {
                    this.variant[key].outlineColor = outlineColor;
                }
            }
        },
    },
    getters: {
        getStyles: (state) => () => {
            const { color, bgColor, outlineColor, outlineColorOpacity } = state.style;

            return {
                ...state.style,
                color: convertToHex(color || ''),
                bgColor: convertToHex(bgColor || ''),
                outlineColor: hexToRgba(
                    convertToHex(outlineColor || ''),
                    outlineColorOpacity || 0.5
                ),
            };
        },
        getVariantStyles: (state) => (name: string) => {
            const variantStyles = { ...state.variant[name] };

            return {
                ...defaultStyle,
                ...variantStyles,
                color: convertToHex(variantStyles.color || ''),
                bgColor: convertToHex(variantStyles.bgColor || ''),
                outlineColor: hexToRgba(
                    convertToHex(variantStyles.outlineColor || ''),
                    variantStyles.outlineColorOpacity || 0.5
                ),
            };
        },
    },
});
