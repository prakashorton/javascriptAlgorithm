function permAlone(str) {
  var perm = permute(str);
  var count = 0;
  perm.forEach((ele) => {
    let hasPer = false;
    for (var j = 0; j < ele.length - 1; j++) {
      if (ele[j] == ele[j + 1]) {
        hasPer = true;
        break;
      }
    }
    if (!hasPer) count++;
  });
  return count;
}

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

permAlone("aab");

/*
    permAlone("aab") should return 2.
    permAlone("aabb") should return 8.
    permAlone("abcdefa") should return 3600.
Explanation aab 
6 total permutations (aab, aab, aba, aba, baa, baa)
 only 2 of them (aba and aba) don't have the same letter
*/
