/**随机生成指定长度的a-zA-Z字符串
 * @param {number} length
 * @returns {string}
*/
export function randoma2Z(length){ //52
    /**@type {string}*/
    let result = "";
    for(let i = 0; i < length; i++){
        /**@type {number}*/
        let random_char_code = Math.floor(Math.random() * 52);
        if(random_char_code > 25) result += String.fromCharCode(random_char_code + 71);
        else result += String.fromCharCode(random_char_code + 65);
    }
    return result;
}
/**递归冻结对象
 * @param {anyObject} obj
 * @returns {void}
*/
export function constantize(obj){
    Object.freeze(obj);
    for(let i in obj) if(typeof obj[i] == "object") constantize(obj[i]);
}