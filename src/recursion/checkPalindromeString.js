/* 
  Time complexity - O(n) 
  Space complexity - O(1) 
*/
export function checkPalindromeString(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str.charAt(start) !== str.charAt(end)) return false;

    start++;
    end--;
  }
  return true;
}

/**
 * @param {string} str
 * @return {boolean}
 *
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 */
function isPalindromeStringByRecursion(str, start = 0, end = str.length - 1) {
  // Base case: if the start index crosses the end index, it's a palindrome
  if (start >= end) return true;

  // Check if characters at start and end positions are the same
  if (str[start] !== str[end]) return false;

  // Recursive call to move inward
  return isPalindromeStringByRecursion(str, start + 1, end - 1);
}
