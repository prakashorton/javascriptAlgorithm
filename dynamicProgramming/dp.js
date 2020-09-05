// Dynamic programming
// A method for solving a complex problem by breaking it down into a
// collection of simpler sub problesm, solving each of those sub problems
// just once and storing their solution

// Works on problems like
//  -   Overlapping sub problems
//          A problem is said to have overlapping sub problems if it can be broken down
//          into subproblems which are reused several times - example
//              - Fibanacci sequence
//  -   Optimal sub strcuture
//          A problem is said to have optimal sub structure if an optimal solution
//          can be constructed from optimal solution of its sub problems - example
//              - Shoartest path problem

// Example - Fibanacci Recursive solution - WIthout Dynamic Programming
function Fibonacci(num) {
  if (num <= 2) return 1;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// Solution of above problem
//  -   Memoization
//          Stores the results of expensive function calls and returning the cached results
//          when the same input occur again
//  -   Tabulation
//          Stores the result of a previous results in a table
//          usually done using iteration
//          Better space complexity can be acheieved using tabulation

// Solution using Memoization
// Example - Fibanacci Recursive Solution - With dynamic programming
const memo = {};
function FibonacciMemo(n) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  let results = FibonacciMemo(n - 1) + FibonacciMemo(n - 2);
  memo[n] = results;
  return `results`;
}

// Tabulation
// Example - Fibanacci Solution - With Dynamic Programming Bottom Up Solution
function FibonacciTablulation(n) {
  if (n <= 2) return 1;
  let fib = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

// FIB - 5 
// 1 1 2 3 5 - 12
