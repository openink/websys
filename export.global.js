/* websys ©2023 LJM12914.
 * https://github.com/openink/websys
 */

import websys from "./export.esm";
Object.defineProperty(window, "websys", {
    value: websys,
    writable: false,
    configurable: false,
    enumerable: true
});