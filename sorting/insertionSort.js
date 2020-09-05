// insertion sort
// builds up the sort gradually creating a larger left which
// is always sorted

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    var currentVal = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
  }
  return array;
}
