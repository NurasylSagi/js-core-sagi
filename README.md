# JS Core - Sagi

This project was created for Lab 4.

The project contains JavaScript functions, closures, classes, inheritance, and unit tests.

## Installation

Install dependencies:

```bash
npm i
```

## Run tests

Run all unit tests:

```bash
npm test
```

The project uses Vitest for unit testing.

## Functions

The project contains the following functions:

* `unique(arr)` - removes duplicate values from an array.
* `groupBy(arr, keyFn)` - groups objects by a calculated key.
* `chunk(arr, size)` - splits an array into smaller arrays.
* `deepClone(obj)` - creates a deep copy of an object.
* `memoize(fn)` - saves previous function results using a cache.
* `counter()` - creates a counter with increment, decrement, and value methods.

## Store classes

The project also contains:

* `Store` - a class for storing and managing items.
* `SortedStore` - inherits from `Store` and keeps numeric items sorted.

The `Store` class uses a private field, getter, static method, and basic class methods.

## Closures in my code

I used closures in the `memoize` and `counter` functions. In `memoize`, the inner function remembers the `cache` variable from the outer function. This allows the function to save previous results and use them again. In `counter`, the inner methods remember the `count` variable. The `inc`, `dec`, and `value` methods can access and change this variable. This demonstrates how closures can keep data between function calls.

## Unit tests

The project contains unit tests created with Vitest.

The tests check normal cases and edge cases, including empty arrays, invalid input types, and zero values.

## AI usage

AI tools were used to help understand JavaScript concepts, write parts of the code, and create unit tests. The final code was reviewed and tested by the student.
