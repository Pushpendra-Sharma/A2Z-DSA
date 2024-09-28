/* 
  Time complexity - O(n) 
  Space complexity - O(n) 
*/
export function printFibonacci(n) {
  const series = [0];
  if (n > 1) series.push(1);

  for (let i = 2; i < n; i++) {
    const nextNum = series[i - 1] + series[i - 2];
    series.push(nextNum);
  }

  return series;
}

/* 
  Time complexity - O(2^n) 
  Space complexity - O(n) 
*/
function fibonacci(n) {
  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/* 
  Time complexity - O(n*2^n) 
  Space complexity - O(n) 
*/
export function printFibonacciByRecursion(n) {
  const series = [];

  for (let i = 0; i < n; i++) {
    series.push(fibonacci(i));
  }

  return series;
}
