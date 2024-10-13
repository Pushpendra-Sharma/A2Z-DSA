/**
 * Problem Statement: Given a non-empty array of integers arr,
 * every element appears twice except for one. Find that single one.
 */

/** Solutions
 * - frequency counter
 * - xorr
 */

/** Time complexity O(n) Space complexity O(1) */
function findNumberAppearingOnce(array) {
  let xorr = 0;
  for (const num of array) {
    xorr = xorr ^ num;
  }

  return xorr;
}

console.log(findNumberAppearingOnce([4, 1, 2, 1, 2]));
