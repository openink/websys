import sys_list from "../states/sys-list";

/**正常结束实例
 * @param {string} id
 * @param {boolean} force 
 * @param {string} [reason]
*/
export default function turnOff(id, force, reason){
    const profile = sys_list.get(id);
    if(profile === undefined) return;
    profile.state.turnedOff = true;
    //const prevent
    //for(let app of profile.registry){
    //    if(app.running){
    //        //todo:给所有正在运行的应用发送停止信号
    //        //预留应用可阻止系统关闭的
    //        app.apis.onShutDown();
    //    }
    //}
}