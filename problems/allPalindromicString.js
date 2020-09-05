function printSubStr(str, low, high) {
  console.log(str.substring(low, high - low + 1));
}

function longestPalindromicSubstring(str) {
  // Get length of input string
  let n = str.length;

  // Table[i, j] will be false if substring
  // str[i..j] is not palindrome. Else
  // table[i, j] will be true
  let table = new Array(str.length)
    .fill(false)
    .map((_) => new Array(s.length).fill(false));

  // All substrings of length 1 are palindromes
  let maxLength = 1;
  for (let i = 0; i < n; ++i) table[(i, i)] = true;

  // Check for sub-string of length 2.
  let start = 0;

  for (let i = 0; i < n - 1; ++i) {
    if (str[i] == str[i + 1]) {
      table[(i, i + 1)] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check for lengths greater than 2.
  // k is length of substring
  for (let k = 3; k <= n; ++k) {
    // Fix the starting index
    for (let i = 0; i < n - k + 1; ++i) {
      // Get the ending index of substring from
      // starting index i and length k
      let j = i + k - 1;

      // Checking for sub-string from ith index
      // to jth index iff str.charAt(i+1) to
      // str.charAt(j-1) is a palindrome
      if (table[(i + 1, j - 1)] && str[i] == str[j]) {
        table[(i, j)] = true;
        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }
  console.log("Longest palindrome substring is: ");
  console.log(table);

  printSubStr(str, start, start + maxLength - 1);

  // Return length of LPS
  return maxLength;
}

// str = "abdba" - 5
