/* 
  Time complexity - O(log(n)) 
  Space complexity - O(1) 
*/
export function checkIfArmstrongNumber(n) {
  let sum = 0;
  let number = n;
  const totalNumberOfDigits = Math.ceil(Math.log10(n));
  while (number > 0) {
    const digit = number % 10;
    sum += digit ** totalNumberOfDigits;
    number = Math.floor(number / 10);
  }
  return n === sum;
}
