const divide = require('./func.js');

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