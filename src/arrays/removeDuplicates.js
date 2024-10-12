/**
 * https://takeuforward.org/data-structure/remove-duplicates-in-place-from-sorted-array/
 *
 * Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once.
 * The relative order of the elements should be kept the same. If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result.
 * It does not matter what you leave beyond the first k elements.
 * Note: Return k after placing the final result in the first k slots of the array.
 */

/** Time complexity O(n) Space complexity O(1) */
function removeDuplicates(array) {
  let uniqueItems = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[uniqueItems] !== array[i]) {
      uniqueItems++;
      // change current item, don't care of other item
      array[uniqueItems] = array[i];
    }
  }

  return uniqueItems;
}
