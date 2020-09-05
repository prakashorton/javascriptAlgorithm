// stack -  LIFO DS
// last element added to the stack will be the first element
// removed from the stack
// Examples
//  - Managing function invocation - Call stack
//  - Undo/Redo in photoshop
//  - Routing (this history object)

// Stack Implementation using Array
// - User Shift / Unshift || push / pop

// Stack Implementation using LinkedList
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Implement stack using two queue
// Push stack [a,b] queue [a,b] []
// Push item in queue using enqueue

// Pop - stack [a,b,c] queue 1 [a,b,c] queue 2 []
//  - Push three items in stack 
//  - dequeue all elements from queue except the last elemnt
//        stack [a,b,c] queue 1 [c] queue 2 [a,b]
//        dequeue the elemnt from queue 1
//  - pop from first queue 

// pop stack [a,b] queue 1 [] queue 2 [a,b]
// repeat the above step

// if element already exist 
// push the item in the qqueue in which element already exist

// Example
// Step 0 Empty Stack
// "Stack"
// +---+---+---+---+---+
// |   |   |   |   |   |
// +---+---+---+---+---+

// Queue A                Queue B
// +---+---+---+---+---+  +---+---+---+---+---+
// |   |   |   |   |   |  |   |   |   |   |   |
// +---+---+---+---+---+  +---+---+---+---+---+

// Step 1: Push 1 to stack
// "Stack"
// +---+---+---+---+---+
// | 1 |   |   |   |   |
// +---+---+---+---+---+

// Queue A                Queue B
// +---+---+---+---+---+  +---+---+---+---+---+
// | 1 |   |   |   |   |  |   |   |   |   |   |
// +---+---+---+---+---+  +---+---+---+---+---+

// Step 2: Push 2 to stack
// "Stack"
// +---+---+---+---+---+
// | 2 |  1 |   |   |   |
// +---+---+---+---+---+

// Queue A                Queue B
// +---+---+---+---+---+  +---+---+---+---+---+
// | 2 | 1 |   |   |   |  |   |   |   |   |   |
// +---+---+---+---+---+  +---+---+---+---+---+

// Step 3: Push 3 to stack
// "Stack"
// +---+---+---+---+---+
// | 3 | 2 | 1 |   |   |
// +---+---+---+---+---+

// Queue A                Queue B
// +---+---+---+---+---+  +---+---+---+---+---+
// | 3 | 2 | 1 |   |   |  |   |   |   |   |   |
// +---+---+---+---+---+  +---+---+---+---+---+


// Step 4: pop from stack
// "Stack"
// +---+---+---+---+---+
// | 2 | 1 |   |   |   |
// +---+---+---+---+---+

// Queue A                Queue B
// +---+---+---+---+---+  +---+---+---+---+---+
// | 3  |  |   |   |   |  | 2 | 1 |   |   |   |
// +---+---+---+---+---+  +---+---+---+---+---+

// Queue A                Queue B
// +---+---+---+---+---+  +---+---+---+---+---+
// |   |   |   |   |   |  | 2 | 1 |   |   |   |
// +---+---+---+---+---+  +---+---+---+---+---+

// Step 5: push 4 from stack
// "Stack"
// +---+---+---+---+---+
// | 4 | 2 | 1 |   |   |
// +---+---+---+---+---+

// Queue A                Queue B
// +---+---+---+---+---+  +---+---+---+---+---+
// |   |   |   |   |   |  | 4 | 2 | 1 |   |   |
// +---+---+---+---+---+  +---+---+---+---+---+




