// Binary Heap
// types of heap
//  -   Max heap
//          Parent nodes are always larger then child node
//  -   Min heap
//          Parent nodes are always smaller than child nodes

// Example - Max Heap
//                      41
//          39                      33
//  18              27          12   
//  Rules   -   Left is added first and then the right

// Example  -   Min Heap
//                            1
//                2                       3
//          17          19              36      7
//      25      100


//  Representation Of Heap
//                                  100
//                  19                                  36
//          17              12                  25              5
//      9       15      6       11          13      8       1       4  



//  Example 
//  [100,19,36,17,12,5,5,9,15,6,11,  13, 8,  1,  4]
//   0   1  2  3   4 5 6 7 8  9  10  11  12  13   14

//  Find of children
//  For any index of an array n...
//  The left child is stored at (2n+1)
//  The right child is stored ar (2n+2)

//  Example - Children of 17
//  Solution    n= index of array which is (3)
//  Left Side   2*3+1  =   7[index]    (9)
//  Right Side  2*3+2  =   8[index]    (15)

//  Example - Children of 5
//  Solution    n= index of array which is (6)
//  Left Side   2*6+1  =   13[index]    (1)
//  Right Side  2*6+2  =   14[index]    (4)

//  Find the parent - If we have an child node need to find the parent
//  For any child node at index n...
//  Its parent is at index (n-1)/2

//  Example find parent of 1 which is at index (13)
//  Solution    13-1/2  =   6[Index]    =   5[Value]
