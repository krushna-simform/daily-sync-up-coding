function findTwo (arr) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(-arr[i])) {
            return [map.get(-arr[i]), i];
        }
        map.set(arr[i], i);
    }
    return null;
}

module.exports = findTwo;