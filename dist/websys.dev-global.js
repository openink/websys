(function () {
    'use strict';

    /* Websys ©2023 LJM12914.
     * https://github.com/openink/websys
     */

    class Websys{
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
         *     rootEl :HTMLElement;
         *     taskBarEl? :HTMLElement;
         * }} options
         */
        constructor(options){
            //验证参数
            const
                rootEl_verified = "rootEl" in options && options.rootEl instanceof HTMLElement,
                taskBarEl_verified = !("taskBarEl" in options) || options.taskBarEl instanceof HTMLElement;
            //todo:构建统一验证/报错函数
            if(!rootEl_verified || !taskBarEl_verified) throw new TypeError("参数有误。");
            //写入实例
            this.#rootEl = options.rootEl;
            this.#taskBarEl = options.taskBarEl ?? null;
            //启动实例
            this.restart();
            //注册基本应用

        }
    //#endregion
    //#region 系统级操作
        /**销毁实例。
         * @param {{
         *     reason? :string;
         * }} options
         */
        dispose(options){
            if(!this.#running) return;
            for(let i in this) delete this[i];
        }
        //暂时不想搞这个
        //freeze(){
        //    
        //}
        pause(){
            if(!this.#running) return;

        }
        restart(){
            if(this.#running) return;

        }
    //#endregion
    //#region 程序注册
        register(){

        }
    //#endregion
    }

    /* Websys ©2023 LJM12914.
     * https://github.com/openink/websys
     */
    Object.defineProperty(window, "Websys", {
        value: Websys,
        writable: false,
        configurable: false,
        enumerable: true
    });

})();
