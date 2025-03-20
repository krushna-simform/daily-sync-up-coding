const pow = require("../src/pow.js");

test("tes for power", () => {
    expect(pow(2, 3)).toBe(8);
    expect(pow(2, -2)).toBe(0.25);
    expect(pow(-2, 2)).toBe(4);
    expect(pow(2, 0)).toBe(1);
})