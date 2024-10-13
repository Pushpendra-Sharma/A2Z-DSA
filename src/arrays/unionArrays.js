/**
 * Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m.
 * Find the union of two sorted arrays.
 * The union of two arrays can be defined as the common and distinct elements in the two arrays.
 * NOTE: Elements in the union should be in ascending order.
 */

/** Time complexity O(n+m) Space complexity O(n+m) */
function unionArrays(array1, array2) {
  const result = [];
  let pointer1 = 0;
  let pointer2 = 0;
  let pointer3 = -1;

  while (pointer1 < array1.length && pointer2 < array2.length) {
    const array1Item = array1[pointer1];
    const array2Item = array2[pointer2];

    if (array1Item < array2Item) {
      if (array1Item !== result[pointer3]) {
        result.push(array1Item);
        pointer3++;
      }
      pointer1++;
    } else if (array1Item > array2Item) {
      if (array2Item !== result[pointer3]) {
        result.push(array2Item);
        pointer3++;
      }

      pointer2++;
    } else if (array1Item === array2Item) {
      if (array2Item !== result[pointer3]) {
        result.push(array2Item);
        pointer3++;
      }
      pointer1++;
      pointer2++;
    }
  }

  // Handle remaining elements in array1
  while (pointer1 < array1.length) {
    if (array1[pointer1] !== result[pointer3]) {
      result.push(array1[pointer1]);
      pointer3++;
    }
    pointer1++;
  }

  // Handle remaining elements in array2
  while (pointer2 < array2.length) {
    if (array2[pointer2] !== result[pointer3]) {
      result.push(array2[pointer2]);
      pointer3++;
    }
    pointer2++;
  }

  return result;
}
