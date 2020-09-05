// Subarray with given sum
// Solved using Slinding window

function Slide(arr, sum) {
  var rSum = 0;
  var header = 0;
  var found = false;
  for (var i = 0; i < arr.length; i++) {
    rSum += arr[i];
    while (!(rSum <= sum)) {
      rSum = rSum - arr[header];
      header++;
    }
    if (rSum === sum) {
      found = true;
      console.log(`${header + 1} ${i + 1}`);
    }
  }
  return found;
}

// Input
// Slide([1 ,2, 3, 7, 5], 12)
// Ouput
// Index of matching sub array
// 2 4
// 4 5

// Find MAx of sub array with a subarray boundary

function SlidingWindow(arr, k) {
  var allResult = [];
  var allMax = [];
  arr.forEach((a, index) => {
    var sub = [];
    for (var i = index; i < index + 3; i++) {
      sub.push(arr[i]);
    }
    allResult.push(sub);
    allMax.push(Math.max(...sub));
  });
  return allMax;
}

// Input
// SlidingWindow([1, 2, 3, 1, 4, 5, 2, 3, 6], 3)
// Output
// [3, 3, 4, 5, 5, 5, 6]

// Find max of subarray
function MaxContiguousSunArray(arr) {
  let max = null;
  let lastMax = null;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      max = arr[0];
      lastMax = arr[0];
      result.push(max);
      continue;
    }
    lastMax = lastMax + arr[i];

    if (lastMax < arr[i]) {
      lastMax = arr[i];
    }
    if (max < lastMax) {
      max = lastMax;
    }
    result.push(lastMax);
  }
  return { result, max };
}
// Input MaxContiguousSunArray([-2,1,-3,4,-1,2,1,-5,4])
// Solution
// [-2,1,-3,4,-1,2,1,-5,4]
// [-2,1,-2,4,3,5,6,1,5]
// 6

function maxSubArraySum(a) {
  var size = a.length;
  var max_so_far = 0,
    max_ending_here = 0;

  for (var i = 0; i < size; i++) {
    max_ending_here = max_ending_here + a[i];

    if (max_so_far < max_ending_here) max_so_far = max_ending_here;

    if (max_ending_here < 0) max_ending_here = 0;
  }

  return max_so_far;
}

function MaxFind(arr) {
  var max = arr[0];
  var res = arr[0];
  for (let i = 0; i < arr.length; i++) {
    var res = arr[0] > 0 ? a[0] : 0;
    for (j = i + 1; j < arr.length; j++) {
      res = res + arr[j];
      if (res > max) {
        max = res;
      }
    }
  }
  return max;
}

// Input
// maxSubArraySum([1,2,3,4,-5])
// Output 10

function countPalindromesInString(s) {
  let count = 0; //or s.length if you chose to count single letters as palindrome
  let subString;
  let allSubStrings = [];
  let palindromeSubStr = [];
  for (let i = s.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      subString = s.substring(j, i);
      allSubStrings.push(subString);
      if (
        subString &&
        subString === subString.split("").reverse().join("") &&
        !palindromeSubStr.includes(subString)
      ) {
        palindromeSubStr.push(subString);
        count += 1;
      }
    }
  }
  console.log(allSubStrings);
  return count;
}

function findLongestWordLength(str) {
  var res = str.split(" ");
  let finalResult = 0;
  return res.reduce((acu, cur) => {
    if (acu < cur.length) {
      return cur.length;
    }
    return acu;
  }, 0);
}

findLongestWordLength("The quick brown");

function largestOfFour(arr) {
  return arr.reduce((acc, ine) => {
    var sum = ine.reduce((acu, cur) => {
      if (acu < cur) {
        return cur;
      }
      return acu;
    }, ine[0]);

    return [...acc, sum];
  }, []);
}
largestOfFour([
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);

function largestOfFour(arr) {
  return arr.reduce((acc, ine) => {
    var sum = ine.reduce((acu, cur) => {
      if (acu < cur) {
        return cur;
      }
      return acu;
    }, ine[0]);

    return [...acc, sum];
  }, []);
}

largestOfFour([
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);
