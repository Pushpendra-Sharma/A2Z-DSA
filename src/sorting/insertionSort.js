/**
 * Problem Statement:
 * Given an array of N integers, write a program to implement the Insertion sorting algorithm.
 */

/** Time complexity O(n^2) Space complexity O(1) */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > element) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = element;
  }

  return array;
}

function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function insertionSortUsingSwap(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      swap(array, j, j - 1);
      j--;
    }
  }
  return array;
}
