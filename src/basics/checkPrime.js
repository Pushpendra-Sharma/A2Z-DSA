import { findAllDivisorsOptimized } from './findAllDivisors.js';

/* 
  Time complexity - O(n) 
  Space complexity - O(1) 
*/
export function isPrime(n) {
  if (n < 2) return false;
  for (let index = 2; index < n; index++) {
    if (n % index === 0) return false;
  }
  return true;
}

/* 
  Time complexity - O(sqrt(n)) 
  Space complexity - O(1) 
*/
export function isPrimeOptimized(n) {
  const divisors = findAllDivisorsOptimized(n);
  // if divisors are only 1 and number itself then it is primse
  return divisors.length === 2;
}
