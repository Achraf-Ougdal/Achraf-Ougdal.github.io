

function endSpaces(str) {
    let myStr = str.split("").reverse().join("");
    let output = "";
    let i = 0;
    while (i < myStr.length) {
        if (myStr[i].toUpperCase() === myStr[i].toLowerCase()) {
            i++;
        } else {
            output = myStr.slice(i);
            break;
        }
    }
    return output.split("").reverse().join("");
}

export default endSpaces