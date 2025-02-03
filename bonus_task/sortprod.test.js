const { sortProducts } = require("./sortprod");

describe("Parameterized Testing", () => {
    const products = [
        { name: "Apple", price: 1 },
        { name: "Banana", price: 2 },
        { name: "Orange", price: 3 }
    ];
    
    it.each([
        [
            products,
            "name",
            [
                { name: "Apple", price: 1 },
                { name: "Banana", price: 2 },
                { name: "Orange", price: 3 }
            ]
        ],
        [
            products,
            "price",
            [
                { name: "Apple", price: 1 },
                { name: "Banana", price: 2 },
                { name: "Orange", price: 3 }
            ]
        ],
    ])("sortProducts: %o, %s", (productList, key, expected) => {
        expect(sortProducts(productList, key)).toEqual(expected);
    });
});