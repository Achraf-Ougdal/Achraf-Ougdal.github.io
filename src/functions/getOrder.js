const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function getOrder(c) {
    let order = alphabets.indexOf(c.toLowerCase()) + 1;
    if (order >= 10) {
        return ("" + order);
    } else {
        return ("0" + order);
    }
}

export default getOrder