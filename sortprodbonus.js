function sortProducts(products, key) { 
    if (!Array.isArray(products) || (key !== 'name' && key !== 'price')) { 
        throw new Error('Invalid input'); 
    } 
    return products.sort((a, b) => { 
        if (key === 'price') { 
            return a.price - b.price; 
        } else { 
            return a.name.localeCompare(b.name); 
        } 
    }); 
} 
module.exports = { sortProducts }; 