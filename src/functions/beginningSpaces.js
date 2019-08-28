function beginningSpaces(str) {
    let output = "";
    let i = 0;
    while (i < str.length) {
        if (str[i].toUpperCase() === str[i].toLowerCase()) {
            i++;
        } else {
            output = str.slice(i);
            break;
        }
    }
    return output;
}

export default beginningSpaces