const { sortProducts } = require("./sortprod");
test('sorts products by name or price', () => {
    const products = [{
            name: 'Banana',
            price: 2
        },
        {
            name: 'Apple',
            price: 1
        },
        {
            name: 'Orange',
            price: 3
        }
    ];
    expect(sortProducts(products, 'name')).toEqual([{
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
    ]);
    expect(sortProducts(products, 'price')).toEqual([{
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
    ]);
});

test('throws error for invalid input in sortProducts', () => {
    expect(() => sortProducts([], 'color')).toThrow('Invalid input');
    expect(() => sortProducts('not an array', 'name')).toThrow('Invalid input');
});