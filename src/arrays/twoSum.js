/**
 * https://takeuforward.org/data-structure/two-sum-check-if-a-pair-with-given-sum-exists-in-array/
 *
 * Problem Statement: Given an array of integers arr[] and an integer target.
 * 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.
 * 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.
 * Note: You are not allowed to use the same element twice.
 * Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.
 */

// Time complexity O(n) | Space complexity O(n)
function twoSum(array, target) {
  if (array.length < 1) return false;
  const hashMap = {};

  for (const n of array) {
    hashMap[n] = (hashMap[n] || 0) + 1;
    if (hashMap[target - n] && target - n !== n) {
      return true;
    }
  }

  return false;
}

console.log(twoSum([1, 5, 2, 7, 2, 9], 8));
console.log(twoSum([1, 3, 9], 6));
console.log(twoSum([1, 3, 3], 6));
console.log(twoSum([1, 5], 6));
