/* 
  Time complexity - O(n) 
  Space complexity - O(n) 
*/
export function findAllDivisors(n) {
  const divisors = [];

  if (n === 0) return [1];

  for (let index = 1; index <= n; index++) {
    if (n % index === 0) divisors.push(index);
  }
  return divisors;
}

/* 
  Time complexity - O(sqrt(n)) 
  Space complexity - O(2*srrt(n)) 
*/
export function findAllDivisorsOptimized(n) {
  const divisors = [];

  if (n === 0) return [1];

  for (let index = 1; index <= Math.sqrt(n); index++) {
    if (n % index === 0) {
      divisors.push(index);
      const otherNumber = n / index;
      if (otherNumber !== index && n % otherNumber === 0)
        divisors.push(otherNumber);
    }
  }
  return divisors;
}
