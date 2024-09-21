/* 
  Time complexity - O(min(n1, n2)) 
  Space complexity - O(1) 
*/
export function calculateGCD(n1, n2) {
  let gcd = 1;
  for (let index = 1; index <= Math.min(n1, n2); index++) {
    if (n1 % index === 0 && n2 % index === 0) gcd = index;
  }
  return gcd;
}
