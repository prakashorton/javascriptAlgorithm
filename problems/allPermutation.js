var permute = function (num, set = [], ans = []) {
  if (num.length === 0) {
    ans.push(set.join(""));
  }

  for (let i = 0; i < num.length; i++) {
    const newNum = num
      .split("")
      .filter((n, index) => index != i)
      .join("");
    set.push(num[i]);
    permute(newNum, set, ans);
    set.pop();
  }
  return ans;
};


// permute("abc")
// ["abc", "acb", "bac", "bca", "cab", "cba"]

// permute("abcd")
// ["abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "bacd", "badc", "bcad", "bcda", "bdac", "bdca", "cabd", "cadb", "cbad", "cbda", "cdab", "cdba", "dabc", "dacb", "dbac", "dbca", "dcab", "dcba"]

