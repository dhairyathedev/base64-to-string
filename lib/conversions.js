export function base64ToString(str){
    return new Buffer.from(str, "base64").toString();
}
export function stringtoBase64(str){
    return new Buffer.from(str).toString("base64");
}