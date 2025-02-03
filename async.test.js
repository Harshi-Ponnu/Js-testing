const { asyncTest } = require('./async');

test('async test', async () => {
    const resp = await asyncTest();
    expect(resp).toBe('Ok!');
});
