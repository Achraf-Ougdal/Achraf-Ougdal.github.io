function capLow(str) {
    let myStr = str.toLowerCase();
    let cap = true;
    let output = [];
    for (let i = 0; i < myStr.length; i++) {
        if (myStr[i].toUpperCase() !== myStr[i].toLowerCase()) {
            if (cap) {
                output.push(myStr[i].toUpperCase());
                cap = false;
            } else {
                output.push(myStr[i]);
                cap = true;
            }
        } else {
            output.push("##");
        }
    }
    return output.join('');
}
export default capLow