/ Depth first search[DFS]

// Depth first search[DFS] - PreOrder
// Visit the node first and traverse to its left
// Example [Input] [DFS] - PreOrder/PostOrder/InOrder
//              10
//      6               15
//  3       8               20
//  Output [10,6,3,8,15,20] [DFS] - PreOrder
//  Output [3,8,6,20,15,10] [DFS] - PostOrder
//  Output [3,6,8,10,15,20] [DFS] - InOrder

// Step - PreOrder
// Start with 10
// explore the left and visit 6 explore 3
// move its 3 as there are nothing to traverse
// move to 6 right which is 8
// go back ro 10
// move to right continue the same

// DFS - Preorder - Steps
//  -   Create a variable to store values of node visited
//  -   Store the root of the DFS in a variable called current
//  -   Write a healper function which accepts a node
//          -   Push the value of a node to the variable that stores the values
//          -   If the node has a left property , call the healper function
//              with the left property on the node
//          -   If the node has a right property, call the healper function
//              with the right property on the node
//  -   Invoke the healper function with the current variable
//  -   Return the array of values

// DFS - PostOrder - Steps
//  -   Create a variable to store values of node visited
//  -   Store the root of the DFS in a variable called current
//  -   Write a healper function which accepts a node
//          -   If the node has a left property , call the healper function
//              with the left property on the node
//          -   If the node has a right property, call the healper function
//              with the right property on the node
//          -   Push the value of a node to the variable that stores the values
//  -   Invoke the healper function with the current variable
//  -   Return the array of values

// DFS - InOrder - Steps
//  -   Create a variable to store values of node visited
//  -   Store the root of the BST in a variable called current
//  -   Write a healper function which accepts a node
//          -   If the node has a left property , call the healper function
//              with the left property on the node
//          -   Push the value of a node to the variable that stores the values
//          -   If the node has a right property, call the healper function
//              with the right property on the node
//  -   Invoke the healper function with the current variable
//  -   Return the array of values

class DepthFirstSearch {
  constructor() {
    this.root = null;
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

  DFSPreOrder() {
    var data = [];
    traverse(this.root);
    return data;

    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
  }

  DFSPostOrder() {
    var data = [];
    traverse(this.root);
    return data;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }
  }

  DFSInOrder() {
    var data = [];
    traverse(this.root);
    return data;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    }
  }
}
