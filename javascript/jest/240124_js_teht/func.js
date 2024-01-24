// functions

// divide func
function divide(a, b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        throw new Error("Unexpected parametres " + a + " and " + b);
    } else if (b == 0) {
        throw new Error("Division by 0");
    }

    return a / b;
}

// ticket prize func
function price(age) {

    if (isNaN(age)) {
        throw new Error("Unexpected parameter " + age);
    } 

    age = Number(age);
    if (age < 0) {
        throw new Error("Age can't be under 0");
    } else if (age > 150) {
        throw new Error("Age can't be over 150");
    }

    // prizes
    if (age < 7) {
        return 0.0;
    } else if (age < 16) {
        return 1.0;
    } else if (age < 26) {
        return 1.5;
    } else if (age < 66) {
        return 3.0;
    } else {
        return 1.5;
    }
}

module.exports = {"div": divide, "pri": price};
