const adult = require('./adult');

test('17 = false', () => {
    expect(adult(17)).toBe(false);
});

test('18 = true', () => {
    expect(adult(18)).toBe(true);
});

test('NaN throws error', () => {
    expect(() => adult("test")).toThrow("not a number");
});

test("numeric string returns error", () => {
    expect(() => adult("18")).toThrow("not a number");
})