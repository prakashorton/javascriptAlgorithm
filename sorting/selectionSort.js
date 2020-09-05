// selection sort
function swap(arr, in1, in2) {
  var temp = arr[in1];
  arr[in1] = arr[in2];
  arr[in2] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    console.log("***");
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i != min) {
      swap(arr, i, min);
      console.log(arr, arr[i], arr[min]);
    }
    console.log("****");
  }
  return arr;
}

console.log(selectionSort([23, 89, 9, 45]));

// output
// [9, 89, 23, 45] 9 23
// [9, 23, 89, 45] 23 89
// [9, 23, 45, 89] 45 89
// [9, 23, 45, 89]
