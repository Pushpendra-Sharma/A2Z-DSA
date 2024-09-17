/* 
  Time complexity - O(log(n)) 
  Space complexity - O(1) 
*/
export function countDigits(n) {
  if (n === 0) return 1;
  else if (n < 0) n = -n;

  let digits = 0;
  while (n > 0) {
    digits++;
    n = Math.floor(n / 10);
  }

  return digits;
}
