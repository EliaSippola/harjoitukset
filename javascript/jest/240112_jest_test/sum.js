function sum(a, b) {

    let num;

    if (a === undefined || a === null) {
        throw new Error('No parametres set');
    }
    if (b === undefined || b === null) {
        num = Number(a);
    } else {
        num = Number(a) + Number(b);
    }

    if (Number.isNaN(num)) {
        throw new Error("Unexpected characters " + a + " and " + b);
    }

    return num;
}

module.exports = sum;