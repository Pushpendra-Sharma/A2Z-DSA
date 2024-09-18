import { reverseNumber } from './reverseNumber.js';

/* 
  Time complexity - O(log(n)) 
  Space complexity - O(1) 
*/
export function checkPalindrome(n) {
  const reverseN = reverseNumber(n);

  return n === reverseN;
}
