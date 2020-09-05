// 6. ZigZag Conversion

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

var convert = function (s, numRows) {
  let result = [];
  let row = 0;
  let goingUp = false;
  for (let i = 0; i < s.length; i++) {
    result[row] = (result[row] || "") + s[i]; // append letter to active row
    if (goingUp) {
      row--;
      if (row === 0) goingUp = false; // reverse direction if goingUp and reaching top
    } else {
      row++;
      if (row === numRows - 1) goingUp = true; // reverse direction after reaching bottom
    }
  }
  return result.join("");
};

