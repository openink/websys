import sys_list from "../states/sys-list";
import { randoma2Z } from "../utils/utils";

/**
 * 创建新的实例。
 * @param {createOptions} options
 */
export default function create(options){
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