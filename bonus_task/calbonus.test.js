const { calculateDiscount } = require('../caldiscount');

describe('Parameterized testing', () => {
    it.each([
        [100, 50, 50],
        [100, 25, 75]
    ])("Price: %s, Discount: %s %", (price, discount, expected) => {
        expect(calculateDiscount(price, discount)).toBe(expected);
    });
});