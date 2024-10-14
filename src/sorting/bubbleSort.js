/**
 * Problem Statement:
 * Given an array of N integers,
 * write a program to implement the Bubble Sorting algorithm.
 */

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

/** Time complexity O(n) Space complexity O(1) */
function bubbleSort(array) {
  let swapCount = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    swapCount = 0;

    for (let j = 0; j < i; j++) {
      if (array[j] >= array[j + 1]) {
        swap(array, j, j + 1);
        swapCount++;
      }
    }

    if (swapCount === 0) break;
  }

  return array;
}

console.log(bubbleSort([13, 46, 24, 52, 20, 9]));
console.log(bubbleSort([5, 4, 3, 2, 1]));
