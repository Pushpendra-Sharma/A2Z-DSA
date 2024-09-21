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

/* 
  The loop runs for less iterations
  Time complexity - O(min(n1, n2)) 
  Space complexity - O(1) 
*/
export function calculateGCD2(n1, n2) {
  for (let index = Math.min(n1, n2); index > 0; index--) {
    if (n1 % index === 0 && n2 % index === 0) return index;
  }

  return 1;
}

/* 
  gcd(15, 20) = gcd(15, 20-15) = gcd(15-5,5) = gcd(10-5, 5) = gcd(5,5) = gcd (0,5)

  Time complexity - O(min(n1, n2)) 
  Space complexity - O(1) 
*/
export function calculateGCD3(n1, n2) {
  while (n1 > 0 && n2 > 0) {
    if (n1 > n2) n1 = n1 - n2;
    else n2 = n2 - n1;
  }

  if (n1 === 0) return n2;
  return n1;
}

console.log('::: calculateGCD3(20,15)', calculateGCD3(20, 15));
