function convertToHex(string: string): string {
    if (string.startsWith('#')) return string;
    if (string.startsWith('rgb')) return rgbToHex(string);
    if (string.startsWith('--')) return cssVarToHex(string);

    return '';
}

function rgbToHex(string: string): string {
    const [r, g, b] = string.match(/\d+/g) ?? [];
    return `#${Number(r).toString(16)}${Number(g).toString(16)}${Number(b).toString(16)}`;
}

function cssVarToHex(cssVariable: string): string {
    const colorValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariable).trim();

    if (colorValue.startsWith('#')) return colorValue;

    if (colorValue.startsWith('rgb')) {
        return rgbToHex(colorValue);
    }

    return '';
}

function hexToRgba(hex: string, opacity: number): string {
    const sanitizedHex = hex.replace('#', '');
    const r = parseInt(sanitizedHex.substring(0, 2), 16);
    const g = parseInt(sanitizedHex.substring(2, 4), 16);
    const b = parseInt(sanitizedHex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export {
    convertToHex,
    cssVarToHex,
    hexToRgba
}