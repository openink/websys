/* Websys ©2023 LJM12914.
 * https://github.com/openink/websys
 */
import { randoma2Z } from "./utils/utils";

export default class Websys{
//#region 变量
    /**挂载根元素。
     * @type {HTMLElement}
     */
    #rootEl;
    /**（可选）
     * @type {HTMLElement} HTMLElement包含undefined和null，手动排除undefined
     */
    #taskBarEl;
    /**程序注册处
     * @type {registry}
    */
    #registry = [];
    /**是否运行中。
     * @type {boolean}
     */
    #running = false;
//#endregion
//#region 访问器
//#endregion
//#region 构造器
    /**创建新的实例。
     * @param {{
     *     root :HTMLElement;
     *     taskBar? :HTMLElement;
     *     settings? :boolean;
     * }} options
     */
    constructor(options){
        const { root, taskBar, settings } = options;
        //验证参数
        const
            rootEl_verified = root instanceof HTMLElement,
            taskBarEl_verified = !("taskBar" in options) || taskBar instanceof HTMLElement;
        //todo:构建统一验证/报错函数
        if(!rootEl_verified || !taskBarEl_verified) throw new TypeError("参数有误。");
        //写入实例
        this.#rootEl = options.root;
        this.#taskBarEl = options.taskBar ?? null;
        //启动实例
        this.restart();
        //注册基本应用
        this.register();
        if(settings === true) this.register();
    }
//#endregion
//#region 系统级操作
    //暂时不想搞这个
    //freeze(){
    //    
    //}
    /**删除界面并终止所有正在运行的程序。
     * @param {string} [reason]
     * @returns {boolean}
     */
    stop(reason){
        if(!this.#running) return;
        this.#running = false;
    }
    /**启动系统。
     * 
     * @returns {boolean}
     */
    restart(){
        if(this.#running) return;
        this.#running = true;
    }
    saveState(){

    }
//#endregion
//#region 程序注册
    register(source){

    }
    unregister(){

    }
//#endregion
//#region 程序运行
    run(){

    }
    kill(){

    }
//#endregion
//#region 通信
    postMessage(){

    }
    subscribe(){

    }
    unsubscribe(){
        
    }
//#endregion
}