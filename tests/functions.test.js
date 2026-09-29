import { describe, test, expect } from "vitest";
import { unique, groupBy, chunk, deepClone, memoize, counter  } from "../src/functions";

import {
    Store,
    SortedStore
} from "../src/Store.js";

describe("unique", () => {
    test("removes duplicate values", () => {
        expect(unique([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    });

    test("works with an empty array", () => {
        expect(unique([])).toEqual([]);
    });

    test("works with strings", () => {
        expect(unique(["apple", "apple", "banana"])).toEqual([
            "apple",
            "banana"
        ]);
    });




    test("groups objects by age", () => {
    const students = [
        { name: "Ali", age: 20 },
        { name: "Sagi", age: 21 },
        { name: "Dima", age: 20 }
    ];

    expect(groupBy(students, student => student.age)).toEqual({
        20: [
            { name: "Ali", age: 20 },
            { name: "Dima", age: 20 }
        ],
        21: [
            { name: "Sagi", age: 21 }
        ]
    });
});

}); 



describe("chunk", () => {
    test("splits array into chunks", () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([
            [1, 2],
            [3, 4],
            [5]
        ]);
    });

    test("works with an empty array", () => {
        expect(chunk([], 2)).toEqual([]);
    });

    test("works when size is bigger than array", () => {
        expect(chunk([1, 2, 3], 5)).toEqual([
            [1, 2, 3]
        ]);
    });

        test("throws error for invalid array type", () => {
        expect(() => chunk("hello", 2)).toThrow(TypeError);
    });

    test("throws error when size is zero", () => {
        expect(() => chunk([1, 2, 3], 0)).toThrow(RangeError);
    });
});

describe("deepClone", () => {
    test("creates an independent copy of an object", () => {
        const student = {
            name: "Sagi",
            info: {
                age: 21
            }
        };

        const copy = deepClone(student);

        copy.info.age = 25;

        expect(student.info.age).toBe(21);
        expect(copy.info.age).toBe(25);
    });

    test("clones arrays", () => {
        const numbers = [1, 2, [3, 4]];

        const copy = deepClone(numbers);

        copy[2].push(5);

        expect(numbers).toEqual([1, 2, [3, 4]]);
        expect(copy).toEqual([1, 2, [3, 4, 5]]);
    });
});




describe("memoize", () => {
    test("returns the same result for the same arguments", () => {
        let calls = 0;

        const add = (a, b) => {
            calls++;
            return a + b;
        };

        const memoizedAdd = memoize(add);

        expect(memoizedAdd(2, 3)).toBe(5);
        expect(memoizedAdd(2, 3)).toBe(5);
        expect(calls).toBe(1);
    });

    test("calculates again for different arguments", () => {
        let calls = 0;

        const square = number => {
            calls++;
            return number * number;
        };

        const memoizedSquare = memoize(square);

        expect(memoizedSquare(4)).toBe(16);
        expect(memoizedSquare(5)).toBe(25);
        expect(calls).toBe(2);
    });
});


describe("counter", () => {
    test("increments and decrements value", () => {
        const myCounter = counter();

        expect(myCounter.value()).toBe(0);

        expect(myCounter.inc()).toBe(1);
        expect(myCounter.inc()).toBe(2);

        expect(myCounter.dec()).toBe(1);
    });

    test("starts from zero", () => {
        const myCounter = counter();

        expect(myCounter.value()).toBe(0);
    });
});



///


describe("Store", () => {
    test("adds items", () => {
        const store = new Store();

        store.add("Apple");

        expect(store.total()).toBe(1);
    });

    test("removes items", () => {
        const store = new Store(["Apple", "Banana"]);

        store.remove("Apple");

        expect(store.total()).toBe(1);
    });

    test("finds an item", () => {
        const store = new Store(["Apple", "Banana"]);

        const result = store.find(item => item === "Banana");

        expect(result).toBe("Banana");
    });

    test("returns total number of items", () => {
        const store = new Store(["Apple", "Banana", "Orange"]);

        expect(store.total()).toBe(3);
    });

    test("checks if object is a Store", () => {
        const store = new Store();

        expect(Store.isStore(store)).toBe(true);
    });
});


describe("SortedStore", () => {
    test("adds items in sorted order", () => {
        const store = new SortedStore();

        store.add(30);
        store.add(10);
        store.add(20);

        expect(store.items).toEqual([10, 20, 30]);
    });
});