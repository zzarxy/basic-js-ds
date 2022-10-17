const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.rootCase = null;
        this.nodeSet = null;
    }

    root() {
        return this.rootCase
    }

    add(data) {
        let newNode = new BinarySearchTree(data)
        
        if (this.rootCase === null) {
            this.rootCase = newNode;
        }
        else {
            this.addNode(this.rootCase, newNode);
        }
    }

    addNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.addNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.addNode(node.right, newNode);
            }
        }
    }

    has(data) {
        if (this.nodeSet === null) {
            this.nodeSet = this.rootCase
        }
        if (this.nodeSet.data == data) {
            return true
        }
        if (data > this.nodeSet.data) {
            if (this.nodeSet.right == null) {
                return false;
            }
            this.nodeSet = this.nodeSet.right
            this.has(data)
        }
        else {
            if (this.nodeSet.left == null) {
                return false;
            }
            this.nodeSet = this.nodeSet.left
            this.has(data)
        }

        return tree.has(data)
    }

    find(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    remove(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    max() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
}

const tree = new BinarySearchTree();

tree.add(5)
tree.add(3)
tree.add(4)
tree.add(5)
tree.add(1)
tree.add(0)

console.log(tree.add(0))




module.exports = {
    BinarySearchTree
};                       