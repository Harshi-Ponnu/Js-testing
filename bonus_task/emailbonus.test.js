const { validateEmail } = require("../email");

describe("Parameterized Testing", () => {
    it.each([
        ["test@example.com", true], 
        ["user.name@domain.co", true],  
    ])("validateEmail: %s", (email, expected) => {
        expect(validateEmail(email)).toBe(expected);
    });
});