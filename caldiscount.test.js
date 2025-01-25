const { calculateDiscount} = require("./caldiscount");
test('calculates discount correctly', () => {
    expect(calculateDiscount(100, 10)).toBe(90);
    expect(calculateDiscount(200, 25)).toBe(150);
});

test('throws error for invalid discount or price', () => {
    expect(() => calculateDiscount(-100, 10)).toThrow('Invalid input');
    expect(() => calculateDiscount(100, 110)).toThrow('Invalid input');
});