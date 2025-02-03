const { filterProducts } = require("./filter");

describe("Parameterized Testing", () => {
    const products = [
        { name: "Apple", price: 1 },
        { name: "Banana", price: 2 },
        { name: "Orange", price: 3 }
    ];
    it.each([
        [products, "apple", [{ name: "Apple", price: 1 }]],
        [products, "banana", [{ name: "Banana", price: 2 }]],
        [products, "orange", [{ name: "Orange", price: 3 }]],
    ])("filterProducts: %o, %s", (productList, query, expected) => {
        expect(filterProducts(productList, query)).toEqual(expected);
    });
});