import { backgroundColors, effects, fontColors, Reset, Color, Effects } from './model';
function addColor(text: string, color: Color, isBackground: boolean = false) {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList: Effects[]) {
    return effectList.map(effect => effects[effect]).join('');
}

export type ColorOptions = {
    font?: Color;
    background?: Color;
    effects?: Effects[];
};

export function color(text: string, options: ColorOptions) {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
