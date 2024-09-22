/* 
  Time complexity - O(n) 
  Space complexity - O(n) 
*/
export function printNTimes(n) {
  if (n > 0) {
    console.log('printNTimes', n);
    return printNTimes(n - 1);
  }
  return;
}

/* 
  Time complexity - O(n) 
  Space complexity - O(n) 
*/
export function print1ToN(i, n) {
  if (i < n) {
    console.log(i);
    return print1ToN(i + 1, n);
  }
  return;
}

print1ToN(1, 5);

/* 
  Time complexity - O(n) 
  Space complexity - O(n) 
*/
export function printNTo1(i, n) {
  if (i >= 1) {
    console.log(i);
    return printNTo1(i - 1, n);
  }
  return;
}

printNTo1(5, 5);
