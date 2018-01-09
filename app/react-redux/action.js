export const IsButton ='IsButton';
export const IsValue ='IsValue';
export function proButton(content) {
    return {type:IsButton , content};
}
export function proValue(content) {
    return {type:IsValue , content};
}

