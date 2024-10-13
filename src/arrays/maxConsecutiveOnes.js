/** Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array. */

/** Time complexity O(n) Space complexity O(1) */
function findMaxConsecutiveOnes(array) {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) count++;
    else count = 0;
    maxCount = Math.max(count, maxCount);
  }

  return maxCount;
}
