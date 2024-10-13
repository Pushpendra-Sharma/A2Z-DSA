/**
 * Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N.
 * Find the number(between 1 to N), that is not present in the given array.
 * */

/** Time complexity O(n) Space complexity O(1) */
function findMissingNumber(array, N) {
  const sum = (N * (N + 1)) / 2;

  let arraySum = 0;
  for (const num of array) {
    arraySum += num;
  }

  return sum - arraySum;
}

function findMissingNumberXOR(srray, N) {
  //
}
