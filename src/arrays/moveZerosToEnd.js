/**
    Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array 
    and move non-negative integers to the front by maintaining their order.
 */

/** Time complexity O(n) Space complexity O(1) */
function moveZerosToEnd(array) {
  let i = 0;
  let j = 1;

  while (j < array.length) {
    if (array[i] === 0 && array[j] !== 0) {
      swap(array, i, j);
      i++;
      j++;
    } else if (array[i] !== 0) {
      i++;
      j++;
    } else if (array[i] === 0 && array[j] === 0) {
      j++;
    }
  }
  return array;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
