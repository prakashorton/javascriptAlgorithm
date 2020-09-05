// Max binary heap

// *****************************************************************
//  Adding/Insert to a max binary heap
//      -   Add to the end
//      -   Bubble up

// Example
//                  41
//          39              33
//  18             27   12
//  [41,39,33,18,27,12]

// Example  (Add 55 to the binary heap)     -   Step 1
//                  41
//          39              33
//  18             27   12      55
//  [41,39,33,18,27,12,55]

// Example  Bubble up     -   Step 2
//                  41
//          39              55
//  18             27   12          33

//  find parent of 55 which is 33
//  Compare 51 and 33 as 55 is greater we swap
//  [41,39,55,18,27,12,33]

// Example  Bubble up     -   Step 3
//                  55
//          39              41
//  18             27   12          33
//  find parent of 41 which is 55
//  Compare 55 and 41 , as 55 is greater swap
//  [55,39,41,18,27,12,55]

//  Insert Pseudocode
//  -   Push the value into the values property on the heap
//  -   Bubble up
//      -   Create a variable called index wch is the length of the
//          values property -1
//      -   create a variable called parentIndex which is the floor
//          of (index-1)/2
//      -   keep lopping as long as the values element at the
//          parentIndex is less than the values elemnt at the child index
//          -   Swap the values element at the parentIndex with
//              the value of the element property at the child index
//          -   Set the index to be the parentIndex and start over.!!!
// *********************************************************************

// ********************************************************************
// Remove from heap

//  MAxBinaryheap remove
//  -   Remove from root
//  -   Remove with the most recently added
//  -   Adjust(sink down)

//  Remove Psudocode
//  -   Swap the first value in the values property with the last one
//  -   Pop from the values property. so you can return the values at
//      the end
//  -   Have the new root "sink down" to the correct spot.!!!
//      -   Your parent index starts as 0(the root)
//      -   Find the index of the left child 2*index+1
//          (make sure its not out f bounds)
//      -   Find the index of the right child 2*index+2
//          (make sure its not out f bounds)
//      -   If the left or right child is greater than the elemnt..swap.!
//      -   If both left and right child are larger...Swap with the
//          Largest child
//      -   The child index you swapped to now becomes the new parent index
//      -   Keep loop and swap untill neither child is greater
//          than the elemnt
//      -   Return the old root

// *******************************************************************

//  Input   [41 39  33  18  27  12  55]
//  Index   [0  1   2   3   4   5   6]
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // insert into heap
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  // remove max element from the heap
  // extract max number
  remove() {
    var max = this.values[0];
    var end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return max;
  }

  bubbleDown() {
    var index = 0;
    var length = this.values.length;
    var element = this.values[index];

    while (true) {
      var leftChildIndex = 2 * index + 1;
      var rightChildIndex = 2 * index + 2;

      var leftChild = null;
      var rightChild = null;
      var swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap != null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    let currentValue = this.values[currentIndex];

    while (currentIndex > 0) {
      // floor of (index-1)/2 - Find PIndex
      var parentIndex = Math.floor((currentIndex - 1) / 2);
      let parentValue = this.values[parentIndex];
      if (currentValue <= parentValue) break;

      this.values[parentIndex] = currentValue;
      this.values[currentIndex] = parentValue;
      currentIndex = parentIndex;
    }
  }
}
