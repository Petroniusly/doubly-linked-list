const Node = require('./node');

class LinkedList {
    constructor() {
        this.lenght = 0;
        this.head = 0;
        this.end = 0;

    }

    append(data) {}

    head() {
        return this.head;
    }

    tail() {
        return this.end;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
        return (this.lenght == 0);
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
