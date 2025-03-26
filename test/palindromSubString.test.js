const palindromSubString = require("../src/palindromSubString.js")

test("tes for palindrom", () => {
    expect(palindromSubString("madam")).toStrictEqual(['m', 'a', 'd', 'a', 'm', 'ada', 'madam']);
    expect(palindromSubString("radar")).toStrictEqual(['r', 'a', 'd', 'a', 'r', 'ada', 'radar']);
})
