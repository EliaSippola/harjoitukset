// functions

function divide(a, b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        throw new Error("Unexpected parametres " + a + " and " + b);
    } else if (b == 0) {
        throw new Error("Division by 0");
    }

    return a / b;
}

module.exports = divide;