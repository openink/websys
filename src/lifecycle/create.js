import sys_list from "../states/sys-list";
import { randoma2Z } from "../utils/utils";
import { saveState } from "./saveState";
import { startSys } from "./start";
import turnOff from "./turnOff";

/**
 * 创建新的实例。
 * @param {{rootEl :HTMLElement; taskBarEl? :HTMLElement;}} options
 * @returns {sysAPIs}
 */
export default function create(options){
    //验证参数
    if(!(options.rootEl instanceof HTMLElement) || !(options.taskBarEl instanceof HTMLElement)) return;
    //生成标识符
    const id = randoma2Z(12);
    //注册实例
    sys_list.set(id, {
        settings: {
            rootEl: options.rootEl,
            //别让我在这里看见undefined
            taskBarEl: options.taskBarEl ?? null
        },
        state: {
            turnedOff: false
        }
    });
    //启动实例
    startSys(id);
    //返回API
    return {
        get id(){
            return id;
        },
        turnOff: turnOff.bind(id),
        saveState: saveState.bind(id),
        restart: startSys.bind(id),
    }
}