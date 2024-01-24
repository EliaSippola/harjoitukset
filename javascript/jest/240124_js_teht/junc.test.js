const funcs = require('./func.js');
const divide = funcs.div;
const price = funcs.pri;

// divide func
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

// price func
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

test('num in str works', () => {
    expect(price("1")).toBe(0.0)
})

test('under 0 throws error', () => {
    expect(() => price(-1)).toThrow("Age can't be under 0");
})

test('over 150 throws error', () => {
    expect(() => price(151)).toThrow("Age can't be over 150");
})