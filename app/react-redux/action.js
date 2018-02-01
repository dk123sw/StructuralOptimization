export const IsButton ='IsButton';
export const IsValue ='IsValue';
// export const AddValue = 'AddValue';
// export const DelValue = 'DelValue';
export function proButton(content) {
    return {type:IsButton , content};
}
export function proValue(content) {
    return {type:IsValue , content};
}
// export function addValue(content) {
//     return {type:AddValue , content};
// }
// export function delValue(content) {
//     return {type:DelValue , content};
// }


