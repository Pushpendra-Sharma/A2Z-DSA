/* 
  Time complexity - O(log(n)) 
  Space complexity - O(1) 
*/
export function countDigits(n) {
  if (n < 0) n = -n;
  if (n === 0) return 1;

  let digits = 0;
  while (n > 0) {
    digits++;
    n = Math.floor(n / 10);
  }

  return digits;
}

/* 
  Time complexity - O(1) 
  Space complexity - O(1) 
*/
export function countDigitsOptimized(n) {
  if (n < 0) n = -n;
  if (n === 0) return 1;

  const digits = Math.floor(Math.log10(n) + 1);
  return digits;
}
