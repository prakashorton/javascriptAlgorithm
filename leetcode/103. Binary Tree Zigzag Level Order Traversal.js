// 103. Binary Tree Zigzag Level Order Traversal

// Given a binary tree, return the zigzag level order traversal of
// its nodes' values. (ie, from left to right, then right to left for
// the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let result = [];
  const traversal = (node, level) => {
    if (!node) return null;
    if (result[level]) result[level].push(node.val);
    else result[level] = [node.val];
    traversal(node.left, level + 1);
    traversal(node.right, level + 1);
  };
  traversal(root, 0);
  result = result.map((res, index) => (index % 2 ? res.reverse() : res));
  return result;
};
