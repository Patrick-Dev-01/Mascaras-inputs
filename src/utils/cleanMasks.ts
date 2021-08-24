export function cleanMask(value: string){
    value = value?.replaceAll('(', '').replaceAll(')', '').replaceAll('.', '').replaceAll('-', '').replaceAll('_', '')
    .replaceAll('/', '');
    return value;
}