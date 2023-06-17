import { defineStore } from "pinia";

export type IButtonColorCode = string | null;

export interface IButtonStyle {
    style: {
        colorCode: IButtonColorCode;
    };
}

const defaultColorCode: IButtonColorCode = '#1d4ed8';

export const useCustomButton = defineStore('customize-button', {
    state: (): IButtonStyle => ({
        style: {
            colorCode: defaultColorCode
        }
    }),
    actions: {
        defineColor(codes: IButtonColorCode) {
            this.style.colorCode = codes;
        },
    },
    getters: {}
});