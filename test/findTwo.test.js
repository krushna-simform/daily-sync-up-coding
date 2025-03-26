const findTwo = require("../src/findTwo.js");

test("tes for power", () => {
    expect(findTwo([1, 2, 3, -1])).toStrictEqual([0, 3]);
    expect(findTwo([1, 2, 3, 4])).toBe(null);
})