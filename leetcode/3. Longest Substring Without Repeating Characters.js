// 3. Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function (s) {
  let max_len = 0;
  let curr = 0;
  let hash = {};
  if (s.length < 2) {
    return s.length;
  }
  for (let i = 0; i < s.length; i++) {
    var char = s[i];
    if (hash[char] == null) {
      curr += 1;
    } else {
      curr = Math.min(i - hash[char], curr + 1);
    }
    max_len = Math.max(max_len, curr);
    hash[char] = i;

    console.log(
      `i = ${i} char = ${char} max = ${max_len} curr = ${curr} hash[${char}] = ${hash[char]}`
    );
  }
  console.log(hash);
  return max_len;
};

// pwwkew
// i = 0 char = p max = 1 curr = 1 hash[p] = 0
// i = 1 char = w max = 2 curr = 2 hash[w] = 1
// i = 2 char = w max = 2 curr = 1 hash[w] = 2
// i = 3 char = k max = 2 curr = 2 hash[k] = 3
// i = 4 char = e max = 3 curr = 3 hash[e] = 4
// i = 5 char = w max = 3 curr = 3 hash[w] = 5

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  let max = str.length === 0 ? 0 : 1;
  for (let i = 0; i < str.length; i++) {
    let cur = 1;
    let arr = [str[i]];
    for (let j = i + 1; j < str.length; j++) {
      if (!arr.includes(str[j])) {
        arr.push(str[j]);
        cur++;
      } else break;
    }
    if (cur > max) {
      max = cur;
    }
  }
  return max;
};
