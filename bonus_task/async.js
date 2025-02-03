async function asyncTest() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Ok!'), 3000);
    });
}

module.exports = { asyncTest };
