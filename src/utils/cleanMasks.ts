export function cleanMask(value: string){
    value = value?.replaceAll('(', '').replaceAll(')', '').replaceAll('.', '').replaceAll('-', '').replaceAll('_', '');
    return value;
}