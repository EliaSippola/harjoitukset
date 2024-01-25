const funcs = require('./func.js');
const divide = funcs.div;
const price = funcs.pri;
const area = funcs.are;
const wprice = funcs.wpr;
const arrToStr = funcs.art;

// divide func
describe.skip('divide func', () => {
    test('Dividing works with numbers', () => {
        expect(divide(4, 2)).toBe(2);
        expect(divide(4, -2)).toBe(-2);
    });

    test('NaN throws error', () => {
        expect(() => divide("4", "2")).toThrow("Unexpected parametres");
        expect(() => divide(4, "2")).toThrow("Unexpected parametres");
        expect(() => divide("4", 2)).toThrow("Unexpected parametres");
        expect(() => divide()).toThrow("Unexpected parametres");
    });

    test("Dividing by 0 throws error", () => {
        expect(() => divide(4, 0)).toThrow("Division by 0");
    });
});

// price func
describe.skip('bus price func', () => {
    test('under 7 returns 0', () => {
        expect(price(6)).toBe(0.0);
    });

    test('under 16 returns 1', () => {
        expect(price(15)).toBe(1.0);
    });

    test('under 25 returns 1.5', () => {
        expect(price(24)).toBe(1.5);
    });

    test('under 65 returns 3', () => {
        expect(price(64)).toBe(3.0);
    });

    test('over 65 returns 1.5', () => {
        expect(price(66)).toBe(1.5);
    });

    test('NaN throws error', () => {
        expect(() => price("test")).toThrow("Unexpected parameter");
        expect(() => price()).toThrow("Unexpected parameter");
    });

    test('numeric str works', () => {
        expect(price("1")).toBe(0.0)
    })

    test('under 0 throws error', () => {
        expect(() => price(-1)).toThrow("Age can't be under 0");
    })

    test('over 150 throws error', () => {
        expect(() => price(151)).toThrow("Age can't be over 150");
    })
});


// circle area func
describe.skip('Area of the circle func', () => {
    test('1 returns PI', () => {
        expect(area(1)).toBe(3.14);
    });

    test('NaN throws error', () => {
        expect(() => area("Nan")).toThrow("Unexpected parameter");
        expect(() => area()).toThrow("Unexpected parameter");
    });

    test('"1" is allowed string', () => {
        expect(area("1")).toBe(3.14);
    });

    test('Negative numbers throw error', () => {
        expect(() => area(-1)).toThrow("Radius can't be under 0");
    });
});


// price with tax func
describe.skip('price with tax func', () => {
    test('wprice(2, false, 1) -> 4', () => {
        expect(wprice(2, true, 1)).toBe(4);
    });

    test('Empty set throws error', () => {
        expect(() => wprice()).toThrow();
    });

    // individual tests
    test('price is NaN throws error', () => {
        expect(() => wprice("NaN", true, 1)).toThrow("Unexpected price");
    });

    test('price under 0 throws error', () => {
        expect(() => wprice(-1, true, 1)).toThrow("Price can't be under 0");
    });

    test('price is "2" (numeric string) returns 4', () => {
        expect(wprice("2", true, 1)).toBe(4);
    });

    test('patron not boolean throws error', () => {
        expect(() => wprice(2, "not boolean", 1)).toThrow("Patron needs to be boolean");
    });

    test('patron false works', () => {
        expect(wprice(2, false, 1)).toBe(4);
    });

    test('patron with over 50 price gives 2.5% discount', () => {
        expect(wprice(50, true, 0)).toBe(50 * 0.975);
    });

    test('patron with over 150 price gives 5% discount', () => {
        expect(wprice(150, true, 0)).toBe(150 * 0.95);
    });

    test('patron with over 250 price gives 10% discount', () => {
        expect(wprice(250, true, 0)).toBe(250 * 0.9);
    });

    test('NaN tax throws error', () => {
        expect(() => wprice(2, false, "NaN")).toThrow("Unexpected tax");
    });

    test('negative tax throws error', () => {
        expect(() => wprice(2, false, -1)).toThrow("Tax can't be under 0");
    });

    test('tax 0.1 gives 1% tax', () => {
        expect(wprice(2, true, 0.01)).toBe(2 * 1.01);
    });

    test('tax 2 gives 200% tax', () => {
        expect(wprice(2, true, 2)).toBe(2*3.0);
    });

    test('tax "100%" gives 100% tax', () => {
        expect(wprice(2, true, "100%")).toBe(2*2.0);
    });
});


// array to string func
describe('Array to string func', () => {
    test('Array ["a", "b", "c"] returns "a:b:c"', () => {
        expect(arrToStr(["a", "b", "c"])).toBe("a:b:c");
    });

    test('Empty set throws error', () => {
        expect(() => arrToStr()).toThrow("array needs to be Array");
    })

    test('Array not Array throws error', () => {
        expect(() => arrToStr("Not array")).toThrow("array needs to be Array");
        expect(() => arrToStr(123)).toThrow("array needs to be Array");
    })

    test('Empty array throws error', () => {
        expect(() => arrToStr([])).toThrow("array needs to be Array");
    })

    test('Values inside array not string, number or boolean throws error' ,() => {
        expect(() => arrToStr([null, null, null])).toThrow("Array can contain only strings, numbers and booleans.");
        expect(() => arrToStr([undefined, undefined, undefined])).toThrow("Array can contain only strings, numbers and booleans.");
        expect(() => arrToStr([[1, 2, 3], ["a", "b", "c"], [4, 5, 6]])).toThrow("Array can contain only strings, numbers and booleans.");
    });

    test('Array can contain numbers', () => {
        expect(arrToStr([1, 2, 3])).toBe("1:2:3");
    });

    test('Array can contain booleans', () => {
        expect(arrToStr([true, false, true])).toBe("true:false:true");
    });
});