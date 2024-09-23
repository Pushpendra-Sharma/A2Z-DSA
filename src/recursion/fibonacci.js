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

