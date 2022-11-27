export function base64ToString(str){
    return new Buffer.from(str, "base64").toString();
}
export function stringtoBase64(str){
    return new Buffer.from(str).toString("base64");
}
export function reverseStr(str){
    return str.split('').reverse().join('')
}

export function removeWhiteSpace(str){
    return str.replace(/\s/g, "");
}