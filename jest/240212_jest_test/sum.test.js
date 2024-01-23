const sum = require('./sum');

test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('1 + 2 != 4', () => {
    expect(sum(1, 2)).not.toBe(4);
});

test('input not type of number: "1" + "2" = 3', () => {
    expect(sum("1", "2")).toBe(3)
})

test('variables are NaN throws error', () => {
    expect(() => sum("a", "b")).toThrow('Unexpected characters');
});

test('only one input returns input: 1 = 1', () => {
    expect(sum(1)).toBe(1);
});

test('parametres missing throws error', () => {
    expect(() => sum()).toThrow('No parametres set');
});

test('Other var is NaN throws error', () => {
    expect(() => sum(1, "b")).toThrow('Unexpected characters');
    expect(() => sum("a", 2)).toThrow('Unexpected characters');
});