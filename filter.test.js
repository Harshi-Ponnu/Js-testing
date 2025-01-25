const { filterProducts } = require('./filter');

test('filters products correctly by query', () => {
    const products = [{
            name: 'Apple',
            price: 1
        },
        {
            name: 'Banana',
            price: 2
        },
        {
            name: 'Orange',
            price: 3
        }
    ];
    expect(filterProducts(products, 'apple')).toEqual([{
        name: 'Apple',
        price: 1
    }]);
    expect(filterProducts(products, 'grape')).toEqual([]);
});

test('throws error for invalid input in filterProducts', () => {
    expect(() => filterProducts([], 123)).toThrow('Invalid input');
    expect(() => filterProducts('not an array', 'apple')).toThrow('Invalid input');
});