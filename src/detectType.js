function detectType(x) {
    if (typeof(x) === "object") {
        let str = Object.prototype.toString.call(x);
        str = str.substring(str.indexOf(" ") + 1, str.length - 1);
        return str.toLowerCase();
    } else {
        return typeof(x);
    }
}

module.exports = detectType;