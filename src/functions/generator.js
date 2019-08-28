import getOrder from "./getOrder"
import beginningSpaces from "./beginningSpaces"
import endSpaces from "./endSpaces"
import capLow from "./capLow"

function generator(str) {
    let myStr = beginningSpaces(endSpaces(str));
    let output = [];
    myStr = capLow(myStr);
    for (let i = 0; i < myStr.length; i++) {
        if (myStr[i].toUpperCase() !== myStr[i].toLowerCase()) {
            output.push(myStr[i]);
            output.push(getOrder(myStr[i]));
        } else {
            output.push(myStr[i]);
        }
    }
    return output.join("");
}

export default generator