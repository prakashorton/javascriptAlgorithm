// singly linked list
// collection of nodes

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add item to list - End of the list
  push(val) {
    const newNode = new Node(val);
    // if no item is in list
    // point head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    // if item exits
    // create an new tail node and change
    // tail and next with new node
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // removes a node from the begining
  // of the list
  shift() {
    if (this.length == 0) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  // adds a new node to the beginning of the list
  unShift(val) {
    const newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // changes the value of a node
  // based on its postion
  set(index, value) {
    // get the current node using get method
    var foundNode = this.get(index);
    if (foundNode) {
      // assign the new value
      foundNode.val = value;
      return true;
    }
    return false;
  }

  // prints the linked list
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  // reverse the list
  reverse() {
    let prev = null;
    const current = this.head;
    let next;
    this.head = this.tail;
    this.tail = current;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }

  // adding a new node to the list at specific position
  insert(index, value) {
    if (index <= 0 || index >= this.length) return false;
    if (index == this.length) {
      return !!this.push(value);
    }
    if (index == 0) {
      return !!this.unShift(value);
    }
    // create a new node
    let newNode = new Node(value);
    // get the previous node to connect
    const previousNode = this.get(index - 1);
    const temp = previousNode.next;
    previousNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // remove a node from list at specific index
  remove(index) {
    if (index <= 0 || index >= this.length) return false;
    if (index == this.length - 1) {
      this.pop();
    }
    if (index == 0) {
      this.shift();
    }
    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  // retrives a node by its position
  get(position) {
    // if postion postion is valid
    if (position < 0 || position >= this.length) return undefined;
    let counter = 0;
    var current = this.head;
    while (counter !== position) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // remove from end of the linked list
  pop() {
    const newTail = this.head;
    if (this.length) {
      const current = this.head;
      // Iterate the entire list
      // new the second last item
      // as second last item is the new tail
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length == 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    } else {
      return undefined;
    }
  }
}

let first = new Node("Hello");
let list = new SinglyLinkedList();

// Reverse
// 123
// Head - 1 Tail - 3
// Reverse head and tail
// Head - 3 Tail -1
// Have node = 1 next = null and previous = null
// Iterate over the list
// 00
//    next = node.next    node.next = 2 | next - 2
//    node.next = prev    prev = null | node.next = null
//    prev = node         node = 1 | prev = 1
//    node = next         next = 2 | node = 2
// 01
//    next = node.next    node.next = null | next - null
//    node.next = prev    prev = 1 | node.next = 1
//    prev = node         node = 2 | prev = 2
//    node = next         next = 3 | node = 3
// 02
//    next = node.next    node.next = null | next - null
//    node.next = prev    prev = 2 | node.next = 2
//    prev = node         node = 3 | prev = 2
//    node = next         next = null | node = null

