/* 
  Time complexity - O(n) 
  Space complexity - O(1) 
*/
export function reverseArrayByRecursion(array, start, end) {
  if (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    return reverseArrayByRecursion(array, start + 1, end - 1);
  }

  return array;
}

/* 
    Time complexity - O(n) 
    Space complexity - O(n) 
*/
export function reverseArray(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

/* 
    Time complexity - O(n) 
    Space complexity - O(1) 
*/
export function reverseOriginalArray(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    // swap
    [array[start], array[end]] = [array[end], array[start]];

    start++;
    end--;
  }

  return array;
}
