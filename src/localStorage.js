"use strict";

window.myLocalStorage = {
    clear() {
        return window.localStorage.clear();
    },

    getItem(key) {
        return window.localStorage.getItem(key);
    },

    setItem(key, value, delay) {
        setTimeout(() => {
            window.localStorage.removeItem(key);
        }, delay);
        return window.localStorage.setItem(key, value);
    },

    removeItem(key) {
        return window.localStorage.removeItem(key);
    }
};