import Node from './Node.js';

class BST {
    constructor() {
        this.root = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return true;
        } else {
            return this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value.id < node.value.id) {
            if (node.left === null) {
                node.left = newNode;
                return true;
            } else {
                return this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
                return true;
            } else {
                return this.insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null) {
            return null;
        }
        if (node.value.id === value.id) {
            return node.value;
        }
        if (value.id < node.value.id) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
    }

    inOrderTraversal(callback) {
        this.inOrderRecorrido(this.root, callback);
    }

    inOrderRecorrido(node, callback) {
        if (node !== null) {
            this.inOrderRecorrido(node.left, callback);
            callback(node.value);
            this.inOrderRecorrido(node.right, callback);
        }
    }

    min() {
        const minNode = this.minNode(this.root);
        return minNode ? minNode.value : null;
    }

    minNode(node) {
        if (node != null && node.left != null) {
            return this.minNode(node.left);
        } else {
            return node;
        }
    }

    max() {
        const maxNode = this.maxNode(this.root);
        return maxNode ? maxNode.value : null;
    }

    maxNode(node) {
        if (node != null && node.right != null) {
            return this.maxNode(node.right);
        } else {
            return node;
        }
    }
}

export default BST;
