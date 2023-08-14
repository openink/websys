/* websys ©2023 LJM12914.
 * https://github.com/openink/websys
 */

import create from "./lifecycle/create";
import turnOff from "./lifecycle/turnOff";
const Websys = {
    create,
    shutdown: turnOff
};
export default Websys;