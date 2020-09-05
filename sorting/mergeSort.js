// merge sort

// Mefering two sorted array
function mergeArray(arr1, arr2) {
  const results = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  console.log(left, right);
  return mergeArray(left, right);
}

console.log(mergeSort([25, 56, 12, 43, 89, 1, 1, 26]));

// output
// [25] [56]
// [12] [43]
// [25, 56] (2) [12, 43]
// [89] [1]
// [1] [26]
// [1, 89] (2) [1, 26]
// [12, 25, 43, 56] (4) [1, 1, 26, 89]

// [1, 1, 12, 25, 26, 43, 56, 89]
