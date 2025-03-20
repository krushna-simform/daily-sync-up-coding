function myPow (base, pow) {
    if (typeof base != "number" || typeof pow != "number") {
        throw new Error("Value should be Integer")
    }

    if (pow == 0) return 1;
    let result = 1;
    let isNegative = pow < 0;
    pow = Math.abs(pow);

    for (let i = 0; i < pow; i++) {
        result *= base;
    }
    return isNegative ? 1 / result : result;
}

module.exports = myPow;