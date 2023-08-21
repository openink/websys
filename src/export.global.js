/* Websys ©2023 LJM12914.
 * https://github.com/openink/websys
 */
import Websys from "./main";
Object.defineProperty(window, "Websys", {
    value: Websys,
    writable: false,
    configurable: false,
    enumerable: true
});