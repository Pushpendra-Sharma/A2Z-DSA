/**
 * Problem Statement:
 * Given an array of N integers,
 * write a program to implement the Selection sorting algorithm.
 */

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

/** Time complexity O(n^2) Space complexity O(1) */
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallestElementIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestElementIndex]) {
        smallestElementIndex = j;
      }
    }

    if (i !== smallestElementIndex) swap(array, i, smallestElementIndex);
  }

  return array;
}
