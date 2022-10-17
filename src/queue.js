const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    getUnderlyingList() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    enqueue(value) {
        const newNode = new Queue(value);
        this.next = newNode
    }

    dequeue() {
        let top = this.next.data
        this.next = this.next.next
        return top
    }
}

const queue = new Queue();

queue.enqueue(1); // adds the element to the queue
queue.enqueue(2);
queue.enqueue(3); // adds the element to the queue
console.log(queue.dequeue()) // returns the top element from queue and deletes it, returns 1
//queue.getUnderlyingList() // returns { value: 3, next: null }
console.log(queue)

module.exports = {
    Queue
};
