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
function bprice(age) {

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


// circle area
function area(radius) {

    if (isNaN(radius)) {
        throw new Error("Unexpected parameter " + radius + ". Expected type float");
    }

    r = Number(radius);
    if (r < 0) {
        throw new Error("Radius can't be under 0");
    }

    return Math.round(Math.PI * (r ** 2 ) * 100) / 100;
}


// price with patron discount and tax
function wprice(price, patron, tax) {

    // price checks
    if (isNaN(price)) {
        throw new Error("Unexpected price " + price);
    }
    let p = Number(price);
    if (p < 0) {
        throw new Error("Price can't be under 0");
    }

    // patron checks
    if (patron !== true && patron !== false) {
        throw new Error("Patron needs to be boolean")
    }

    // tax checks
    if (isNaN(tax)) {
        if (tax.slice(-1) !== "%") {
            throw new Error("Unexpected tax " + tax);
        } else if (isNaN(tax.slice(0, -1))) {
            throw new Error("Unexpected tax " + tax.slice(0, -1));
        }
    }
    let t;
    if (typeof(tax) == 'string' && tax.slice(-1) == "%") {
        t = Number(tax.slice(0, -1)) / 100;
    } else {
        t = Number(tax);
    }
    if (t < 0) {
        throw new Error("Tax can't be under 0");
    }

    // calcs
    let reduce;

    if (patron) {
        if (price >= 250) {
            reduce = 0.9;
        } else if (price >= 150) {
            reduce = 0.95;
        } else if (price >= 50) {
            reduce = 0.975;
        } else {
            reduce = 1.0;
        }
    } else {
        reduce = 1.0;
    }

    t = t + 1.0;

    return price * reduce * t;
}


// arrau to str func
function arrToStr(array) {
    if (!Array.isArray(array)) {
        throw new Error("array needs to be Array. " + typeof(array) + " given");
    } else if (array === null || array === undefined || array.length < 1) {
        throw new Error("array needs to be Array");
    }

    let str;
    array.forEach((subStr, i) => {
        if (typeof(subStr) !== "string" && typeof(subStr) !== "number" && typeof(subStr) !== "boolean") {
            throw new Error("Array can contain only strings, numbers and booleans. " + subStr + " is type " + typeof(subStr));
        }

        if (i != 0) {
            str = str + ":" + subStr;
        } else {
            str = subStr;
        }
    });

    return str;
}

module.exports = {"div": divide, "pri": bprice, "are": area, "wpr": wprice, "art": arrToStr};
