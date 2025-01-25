const { validateEmail } = require("./email");
test('validates email correctly', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('invalid-email')).toBe(false);
});

test('throws error for invalid input in validateEmail', () => {
    expect(() => validateEmail(123)).toThrow('Invalid input');
});