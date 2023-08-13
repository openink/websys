/**@type {Map<string, sysProfile>}*/
const sys_list = new Map();

/**随机生成指定长度的a-zA-Z字符串
 * @param {number} length
 * @returns {string}
*/
function randoma2Z(length){ //52
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

/**
 * 创建新的实例。
 * @param {createOptions} options
 */
function create(options){
    if(!(options.rootEl instanceof HTMLElement) || !(options.taskBarEl instanceof HTMLElement)) return;
    const id = randoma2Z(12);
    sys_list.set(id, {
        registry: [],
        removed: false,
        rootEl: options.rootEl,
        taskBarEl: options.taskBarEl
    });
    return {
        id,
        //todo:系统及操控API
    }
}

/**正常结束实例
 * @param {string} id
*/
function shutdown(id){
    const profile = sys_list.get(id);
    if(profile === undefined) return;
    profile.removed = true;
    //const prevent
    for(let app of profile.registry){
        if(app.running){
            //todo:给所有正在运行的应用发送停止信号
            //预留应用可阻止系统关闭的
            app.apis.onShutDown();
        }
    }
}

/* websys ©2023 LJM12914.
 * https://github.com/openink/websys
 */
const websys = {
    create,
    shutdown
};

export { websys as default };
