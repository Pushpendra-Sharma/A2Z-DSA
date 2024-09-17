/* 
  Time complexity - O(log(n)) 
  Space complexity - O(1) 
*/
export function reverseNumber(n) {
  let absoluteN = Math.abs(n);
  let reverse = 0;

  while (absoluteN > 0) {
    const lastDigit = absoluteN % 10;
    reverse = reverse * 10 + lastDigit;
    absoluteN = Math.floor(absoluteN / 10);
  }
  if (n < 0) reverse *= -1;

  return reverse;
}
