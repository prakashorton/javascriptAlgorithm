//  - BFS (Breadth First Search)
// Example
// [Sample Input]
//              10
//          6           15
//      3       8          20
// [Sample Output]
// [10,6,15,3,8,20]

// Step 01
//Add Root to queue
//queue[10] | visited[]

// Step 02
// move all items from queue to visited
//queue[] | visited[10]

// Step 03
// check if there is a left and right ,
// move those to the queue
// queue[6, 15] | visited[10]

// Step 04
// remove first item from queue [6]
// and push to visited
// queue[15] | visited[10,6]

// Step 05
// check if there is left and right from
// current moved node[6] to visited array
// found 3 and 8 from 6th node-
// add those to queue
// queue[15,3,8] | visited[10,6]

// Step 06
// remove the first item from queue [15]
// and push to visited
// queue[3,8] | visited[10,6,15]

// Step 07
// check if there is left and right from
// current moved node[15] to visited array
// found 20 from [15] node-
// add those to queue
// queue[3,8,20] | visited[10,6,15]

// Step 08
// remove the first item from queue [3]
// and push to visited
// queue[8,20] | visited[10,6,15,3]

// Step 09
// Follow those two steps for all items
// Finnaly when queue is empty
// queue[] | visited[10,6,15,3,8,20]

// Step 10
// Final output [10,6,15,3,8,20]

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BreathFirstSearch {
  constructor() {
    this.root = null;
  }

  BFS() {
    var node = this.root;
    var visited = [];
    var queue = [];
    queue.push(node);
    while (queue.length) {
      // remove 1 item from queue
      node = queue.shift();
      visited.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  // insert a value in tree
  insert(value) {
    var newNode = new Node(value);
    // no root
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value == current.value) return undefined;
        // if value is lesser
        // move to left
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right == null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}
