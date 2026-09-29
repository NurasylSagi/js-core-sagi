class Store {
    #items = [];

    constructor(items = []) {
        this.#items = [...items];
    }

    add(item) {
        this.#items.push(item);
        return item;
    }

    remove(item) {
        const index = this.#items.indexOf(item);

        if (index !== -1) {
            this.#items.splice(index, 1);
            return true;
        }

        return false;
    }

    find(callback) {
        return this.#items.find(callback);
    }

    total() {
        return this.#items.length;
    }

    get items() {
        return this.#items;
    }

    static isStore(value) {
        return value instanceof Store;
    }
}


class SortedStore extends Store {
    add(item) {
        super.add(item);

        this.items.sort((a, b) => a - b);

        return item;
    }
}


export {
    Store,
    SortedStore
};
