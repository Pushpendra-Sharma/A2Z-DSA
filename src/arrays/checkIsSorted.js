/**
    https://takeuforward.org/data-structure/check-if-an-array-is-sorted/

    Problem Statement: Given an array of size n, write a program to check if the given array is sorted 
    in (ascending / Increasing / Non-decreasing) order or not. 
    If the array is sorted then return True, Else return False.
 */

/**
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 * */
function isArraySorted(array) {
  let prevElement = array[0];

  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (element < prevElement) return false;
    prevElement = element;
  }

  return true;
}
