/* 
  Time complexity - O(n) 
  Space complexity - O(n) 
*/
export function findFactorialByRecursion(n) {
  if (n > 0) return n * findFactorialByRecursion(n - 1);
  return 1;
}

/* 
    Time complexity - O(n) 
    Space complexity - O(1) 
  */
export function findFactorialByIteration(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
