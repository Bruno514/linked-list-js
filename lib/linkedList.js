import { Node } from "../lib/node.js";

class LinkedList {
  constructor(node = null) {
    if (node !== null && !(node instanceof Node)) {
      throw new Error("Node parameter is not a node.");
    }

    this.head = node;
  }

  #isNodeInstance(object) {
    if (!(object instanceof Node)) {
      throw new Error("Node parameter is not a node.");
    }

    return true;
  }

  append(node) {
    this.#isNodeInstance(node);

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.nextNode != null) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = node;
    }
  }

  prepend(node) {
    this.#isNodeInstance(node);

    if (this.head === null) {
      this.head = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
  }

  size() {
    if (this.head === null) {
      return 0;
    }

    let size = 1;
    let currentNode = this.head;

    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
      size += 1;
    }

    return size;
  }

  headNode() {
    return this.head;
  }

  tailNode() {
    let currentNode = this.head;

    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  at(index) {
    let currentNode = this.head;

    if (index < 0) throw new Error("Index negative.");

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
      if (currentNode === null) break;
    }

    return currentNode;
  }

  pop() {
    if (this.head === null) {
      throw new Error("Cannot delete.");
    }

    if (this.head.nextNode === null) {
      this.head = null;
      return;
    }

    let currentNode = this.head;

    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }

    currentNode = null;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode != null && currentNode.value != value)
      currentNode = currentNode.nextNode;

    return currentNode === null ? false : true;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode != null && currentNode.value != value) {
      currentNode = currentNode.nextNode;
      index += 1;
    }

    return currentNode === null ? false : true;
  }

  insertAt(value, index) {
    if (this.head === null) {
      throw new Error("List is empty.");
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;

      return;
    }

    let prevNode = null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
      if (currentNode === null) break;
    }

    newNode.nextNode = currentNode;
    prevNode.nextNode = newNode;
  }

  removeAt(index) {
    if (this.head === null) {
      throw new Error("List is empty.");
    }

    if (index === 0) {
      const next = this.head.nextNode;
      this.head = next;
    }

    let curr = this.head;
    let prev = this.head;

    for (let i = 0; i < index; i++) {
      prev = curr;
      curr = curr.nextNode;
      if (curr.nextNode === null) break;
    }

    const next = curr.nextNode;
    prev.nextNode = next;
  }

  toString() {
    if (this.head === null) {
      return "null";
    }

    let currentNode = this.head;
    let string = `( ${currentNode.value} ) -> `;

    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
      string += `( ${currentNode.value} ) -> `;
    }

    string += "null";

    return string;
  }
}

export { LinkedList };
