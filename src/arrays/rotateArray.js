/**
 * https://takeuforward.org/data-structure/left-rotate-the-array-by-one/
 * Problem Statement: Given an array of N integers, left rotate the array by one place.
 */

/** Time Complexity O(n) Space complexity O(1) */
function leftRotateArrayBy1(array) {
  const firstElement = array.shift();
  array.push(firstElement);
  return array;
}

function reverse(array, start, end) {
  while (start <= end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    end--;
    start++;
  }
}

/** Problem Statement: Given an array of integers,
 * rotating array of elements by k elements either left or right.
 * */

/** Time Complexity O(n) Space complexity O(1) */
function rotateArrayByK(array, k, direction) {
  if (k === array.length) return array;
  if (k > array.length) k = k - array.length;

  if (direction == 'left') {
    reverse(array, 0, k - 1);
    reverse(array, k, array.length - 1);
  } else if (direction == 'right') {
    reverse(array, 0, array.length - 1 - k);
    reverse(array, array.length - 1 - k, array.length - 1);
  }
  reverse(array, 0, array.length - 1);

  return array;
}

console.log(rotateArrayByK([3, 7, 8, 9, 10, 11], 3, 'left'));
console.log(rotateArrayByK([1, 2, 3, 4, 5, 6, 7], 2, 'left'));
console.log(rotateArrayByK([1, 2, 3, 4, 5, 6, 7], 2, 'right'));
