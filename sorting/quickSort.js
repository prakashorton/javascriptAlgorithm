// Quick Sort

function swap(arr, in1, in2) {
  var temp = arr[in1];
  arr[in1] = arr[in2];
  arr[in2] = temp;
}

// Returns in pivot index
function pivot(array, startIndex = 0, endIndex = array.length + 1) {
  var pivot = array[startIndex];
  var swapIndex = startIndex;
  for (var i = startIndex + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, startIndex, swapIndex);
  return swapIndex;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    // left side
    quickSort(array, left, pivotIndex - 1);
    // right side
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
}
