// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let l3 = head;
  let carry = 0;

  while (l1 != null || l2 != null) {
    let l1Value = l1 != null ? l1.val : 0;
    let l2Value = l2 != null ? l2.val : 0;

    let currentSum = l1Value + l2Value + carry;

    let lastDigit = currentSum % 10;
    carry = Math.floor(currentSum / 10);

    console.log(`${currentSum} - ${carry} - ${lastDigit}`);
    let node = new ListNode(lastDigit);
    l3.next = node;

    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
    l3 = l3.next;
  }

  if (carry > 0) {
    let node = new ListNode(carry);
    l3.next = node;
    l3 = l3.next;
  }
  return head.next;
};
