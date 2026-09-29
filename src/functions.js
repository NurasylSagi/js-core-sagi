function unique(arr) {
    return [...new Set(arr)];
}


function groupBy(arr, keyFn) {
    return arr.reduce((groups, item) => {
        const key = keyFn(item);

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(item);

        return groups;
    }, {});
}



function chunk(arr, size) {
    if (!Array.isArray(arr)) {
        throw new TypeError("arr must be an array");
    }

    if (!Number.isInteger(size) || size <= 0) {
        throw new RangeError("size must be greater than 0");
    }

    const result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}



function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const clone = {};

    for (const key in obj) {
        clone[key] = deepClone(obj[key]);
    }

    return clone;
}


function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);

        cache.set(key, result);

        return result;
    };
}

function counter() {
    let count = 0;

    return {
        inc() {
            count++;
            return count;
        },

        dec() {
            count--;
            return count;
        },

        value() {
            return count;
        }
    };
}


export {
    unique,
    groupBy,
    chunk,
    deepClone,
    memoize,
    counter
};