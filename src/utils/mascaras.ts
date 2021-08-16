export function cpfCnpj(value: string){
    if(value.length <= 11){
        return value.replace(/\d/g, "")
    }
}