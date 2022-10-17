const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {



    if (l.value == k) {
        l = l.next
    }
    let node = l;
    if (node !== null) {
        while (node.next) {
            if (node.next.value === k) {
                node.next = node.next.next;
            } else {
                node = node.next;
            }
        }
    }
    return l
}

let list = { value: 1, next: { value: 2, next: { value: 3, next: null } } };

list = removeKFromList(list, 1);
console.log(list)

module.exports = {
    removeKFromList
};
