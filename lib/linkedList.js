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

    let sizeCount = 1;
    let currentNode = this.head;

    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
      sizeCount += 1;
    }

    return sizeCount;
  }

  headNode() {
    if (this.head === null) {
      return null;
    }

    return this.head.value;
  }

  tailNode() {
    let currentNode = this.head;
    let tail = currentNode.value;

    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }

    tail = currentNode.value;

    return tail;
  }

  at(index) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode != null) {
      if (currentIndex === index) {
        return currentNode;
      }

      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    throw new Error("Node not found.");
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
    let previousNode = currentNode;

    while (currentNode.nextNode != null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    previousNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode != null && currentNode.value != value)
      currentNode = currentNode.nextNode;

    if (currentNode === null) {
      return false;
    }

    return true;
  }

  find(value) {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;
    let indexCount = 0;

    while (currentNode != null && currentNode.value != value) {
      currentNode = currentNode.nextNode;
      indexCount += 1;
    }

    if (currentNode === null) {
      return null;
    }

    return indexCount;
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
