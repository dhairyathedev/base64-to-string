export function base64ToString(str){
    return new Buffer.from(str, "base64").toString();
}