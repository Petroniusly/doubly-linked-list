const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head;
        this._tail;
    }

    append(data, previus) {
        var node = new Node(data,0,0);
        
        if (this.isEmpty()) {
            this._head = node;
            this._tail = node;
        } else {
            previus = previus == undefined ? this._tail : previus; //if arg previus not comming, it equal this._tail
            if (previus.next != 0) { //add between node in list;
                previus.next.prev = node;
                node.next = previus.next;
                node.prev = previus;
                previus.next = node;
            } else { //add to the end
                node.prev = previus;
                previus.next = node;
                this._tail = node; 
            }
            
        }
        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var count = 0;
        if (index >= this.length) {
            return "Cannot find item. Index is bigger than list's length";
        }
        return this.next(index, count, this._head).data;
    }

    // This Method search item by forward step from _head
    next(index, count, node) { 
        if (count === index) {
            return node;
        } else {
            count++;
            return this.next(index, count, node.next);
        } 
    }

    insertAt(index, data) {
        var count = 0;
        if (index >= this.length) {
            return "Cannot insert item. Index is bigger than list's length";
        }
        this.append(data, this.next(index - 1, count, this._head)); 
    }

    isEmpty() {
        return (this.length === 0);
    }

    clear() {
        this.length = 0;
        this._head.data = null;
        this._head.next = null;
        this._tail = this._head;
    }

    deleteAt(index) {
        var count = 0;
        if (index >= this.length) {
            return "Cannot delete item. Index is bigger than list's length";
        }
        if (index == this.length - 1) { //last node in list
            this._tail.prev.next = 0;
            this._tail = this._tail.prev;
        } else if (index == 0) { //first node in list
            this._head.next.prev = 0;
            this._head = this._head.next;
        } else { 
            var deleteNode = this.next(index, count, this._head);
            deleteNode.next.prev = deleteNode.prev;
            deleteNode.prev.next = deleteNode.next;
        }
    }

    reverse() {
        var node = this._head;
        var tempLink;
        for (var i = 0; i < this.length; i++) {
            tempLink = node.prev;
            node.prev = node.next;
            node.next = tempLink;
            if (i == 0) {
                this._tail = node;
            }
            if (i == this.length - 1) {
                this._head = node;
                break;
            }
            node = node.next;
        }
    }

    indexOf(data) {
        var node = this._head;
        var count = 0;
        while (count < this.length) {
            if (node.data == data) {
                return count;
            } else {
                node = node.next;
                count++;
            }
        };
        return -1;
    }
}

module.exports = LinkedList;
