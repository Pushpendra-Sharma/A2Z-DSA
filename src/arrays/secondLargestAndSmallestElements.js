/** Problem Statement:
 * Given an array, find the second smallest and second largest element in the array.
 * Print ‘-1’ in the event that either of them doesn’t exist.
 * */

/** Time complexity O(nlogn) Space complexity O(1) */
export function findSecondLargestAndSmallestElementsBySorting(array) {
  if (array.length < 2) return -1;

  array.sort((a, b) => a - b);
  return [array[1], array[array.length - 2]];
}

/** Time complexity O(n) Space complexity O(1) */
export function findSecondLargestAndSmallestElements(array) {
  // edge case when length <2
  if (array.length < 2) return -1;

  //  define index for smallest and largest
  let index1 = 0; // small
  let index2 = 1; // large

  //   iterate over values to find smallest and largest 
  for (let index = 2; index < array.length; index++) {
    const element = array[index];
    if (element > array[index2]) index2 = index;
    if (element < array[index1]) index1 = index;
  }

  const largest = array[index2];
  const smallest = array[index1];

  let secondSmallest = Infinity;
  let secondLargest = -Infinity;

  for (const number of array) {
    // 2nd smallest
    if (number > smallest && number < secondSmallest) secondSmallest = number;

    // 2nd largest
    if (number < largest && number > secondLargest) secondLargest = number;
  }

  return [secondSmallest, secondLargest];
}

/** Time complexity O(n) Space complexity O(1) */
export function findSecondLargestAndSmallestElementsOptimized(array) {
  if (array.length < 2) return -1;

  let largest = -Infinity;
  let smallest = Infinity;
  let secondLargest = -Infinity;
  let secondSmallest = Infinity;

  for (const number of array) {
    if (number > largest) {
      secondLargest = largest;
      largest = number;
    } else if (number > secondLargest && number !== largest) {
      secondLargest = number;
    }

    if (number < smallest) {
      secondSmallest = smallest;
      smallest = number;
    } else if (number < secondSmallest && number !== smallest) {
      secondSmallest = number;
    }
  }

  return [secondSmallest, secondLargest];
}
