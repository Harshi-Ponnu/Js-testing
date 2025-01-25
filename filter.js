function filterProducts(products, query) {
    if (!Array.isArray(products) || typeof query !== 'string') {
        throw new Error('Invalid input');
    }
    return products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
}

module.exports = { filterProducts };
