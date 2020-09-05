// Bubble sort
function swap(arr, in1, in2) {
  var temp = arr[in1];
  arr[in1] = arr[in2];
  arr[in2] = temp;
}

function bubblesort(arr) {
  for (var i = arr.length; i > 0; i--) {
    console.log("****");
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

  bubblesort([90, 5, 4, 45, 63]);
// Input [90, 5, 4, 45, 63]
// ****
// [90, 5, 4, 45, 63] 90 5
// [5, 90, 4, 45, 63] 90 4
// [5, 4, 90, 45, 63] 90 45
// [5, 4, 45, 90, 63] 90 63
// ****
// [5, 4, 45, 63, 90] 5 4
// [4, 5, 45, 63, 90] 5 45
// [4, 5, 45, 63, 90] 45 63
// ****
// [4, 5, 45, 63, 90] 4 5
// [4, 5, 45, 63, 90] 5 45
// ****
// [4, 5, 45, 63, 90] 4 5
// ****
// Output [4, 5, 45, 63, 90]
