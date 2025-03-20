const detectType = require("../src/detectType.js");

test("tes for detectType", () => {
    expect(detectType(new Date())).toBe("date");
    expect(detectType(new Map())).toBe("map");
    expect(detectType(new WeakMap())).toBe("weakmap");
    expect(detectType({})).toBe("object");
    expect(detectType([])).toBe("array");
})