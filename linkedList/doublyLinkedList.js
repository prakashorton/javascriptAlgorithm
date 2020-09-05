// doubly linked list
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adds a node to the end of the list
  push(value) {
    const node = new Node(value);
    if (this.length == 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  // remove item from end
  pop() {
    if (this.length == 0) {
      return undefined;
    }
    const popnode = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popnode.prev;
      this.tail.next = null;
      popnode.prev = null;
    }

    this.length--;
  }

  // remove a node from the biginning of the list
  shift() {
    if (this.length == 0) {
      return undefined;
    }
    const oldHead = this.head;
    if (this.length == 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // add an item to the begining of the list
  unshift(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNodel;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // gets node from position
  get(index) {
    if (index < 0 || index >= this.length) return false;
    const loopBasedOnIndex = Math.floor(this.length / 2);
    let count = 0;
    let current = null;
    if (loopBasedOnIndex <= this.length) {
      // get from head
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      // get from tail
      count = this.length - 1;
      current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  // sets/updates the value of node based on postion
  set(index, value) {
    if (index < 0 || index >= this.length) return false;
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  // adding anode by index
  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) {
      this.unshift(value);
      return true;
    }
    if (index == this.length) {
      this.push(value);
    }
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    const newNode = new Node(value);
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  // remove a node by postion
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) {
      this.shift();
      return true;
    }
    if (index == this.length - 1) {
      this.pop();
      return true;
    }
    const removed = this.get(index);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    removed.next = null;
    removed.prev = null;
    this.length--;
    return true;
  }
}

const list = new DoublyLinkedList();
