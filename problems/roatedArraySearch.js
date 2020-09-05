function pivotedBinarySearch(arr, key) {
  let pivot = this.findPivot(arr, 0, arr.length - 1);

  // If we didnt find a pivot, then array is not roated at all
  if (pivot == -1) return this.binarySearchTree(arr, 0, arr.length - 1, key);

  // if we found a pivot , then first compare with pivot and then
  // search in two subarray around pivot
  if (arr[pivot] == key) return pivot;
  if (arr[0] <= key) return this.binarySearchTree(arr, 0, pivot - 1, key);
  return this.binarySearchTree(arr, pivot + 1, n - 1, key);
}

// function to get pivot. Fo ex [3,4,5,6,1,2] it returns 3 (index of 6)
function findPivot(arr, low, high) {
  // base case
  if (high < low) return -1;
  if (high == low) return low;

  let mid = (low + high) / 2;
  if (mid < high && arr[mid] > arr[mid + 1]) return mid;
  if (mid > high && arr[mid] < arr[mid - 1]) return mid - 1;
  if (arr[low] >= arr[mid]) return this.findPivot(arr, low, mid - 1);
  return this.findPivot(arr, mid + 1, high);
}

function binarySearch(arr, low, high, key) {
  if (high < low) return -1;
  let mid = (low + high) / 2;
  if (key == arr[mid]) return mid;
  if (key > arr[mid]) return this.binarySearch(arr, mid + 1, high, key);
  return this.binarySearch(arr, low, mid - 1, key);
}
