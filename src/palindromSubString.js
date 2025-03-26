function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

function findPalindromicSubstrings(str) {
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let subStr = str.slice(i, j);
            if (isPalindrome(subStr)) {
            arr.push(subStr);
        }
    }
    }
    return arr.sort((a, b) => a.length - b.length);
}

module.exports = findPalindromicSubstrings;