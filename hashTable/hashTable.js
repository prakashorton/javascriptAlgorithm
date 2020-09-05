// Hash Tables - Key Values paires
// Key in has table are not ordered
// Its fast
// All programming languafe has some sort of has table ds
// Introduction -
//      It would be nice if instead of using index to access the color
// we could use more human readable keys.  Human readablities.
// Example - colors["pink"] is way better than color[2]

// The Hash Part
// To implement we ll be using an array
// In order to look up values by key
// we need a way to convert keys into valid array index
// Function that perform this task called hash function

// What makes a gud hash
//  -   Fast
//  -   Doesnt cluster output at specific index, but distribuate uniformly
//  -   Get input yield with same output

// Write a simple hash function

function hash(key, arrayLength) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }
  return total;
}

hash("pink");

// Refining our hash funcion
// Problesm with current hash
//  -   Only hash strings
//  -   Not contant time - linear key length
//  -   Could be a lttle more random

// Refined version of hash function
function hash(key, arrayLength) {
  let total = 0;
  let weried_prime = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + weried_prime + value) % arrayLength;
  }
  return total;
}

hash("pink"); // result 6
hash("cyan"); // result 6

// Dealing with collisions
//  -   Separate chaining
//          Use other nested ds
//  -   Linear probling
//          We search thrw the array to find the next empty slot


