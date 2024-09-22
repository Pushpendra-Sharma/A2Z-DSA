/* 
  Time complexity - O(n) 
  Space complexity - O(n) 
*/
export function findSumByRecursion(n) {
  if (n > 0) return n + findSumByRecursion(n - 1);
  return 0;
}

/* 
  Time complexity - O(1) 
  Space complexity - O(1) 
*/
export function findSumByFormula(n) {
  return ((n + 1) * n) / 2;
}
