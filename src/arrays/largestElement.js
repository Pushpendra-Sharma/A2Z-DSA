/** Time complexity - O(n)  Space complexity - O(1) */
export function findLargestElementNaive(array) {
  if (array.length === 0) return undefined; // Handle empty array case
  let largest = array[0];

  for (const element of array) {
    if (element > largest) largest = element;
  }

  return largest;
}

/** Time complexity - O(nlogn)  Space complexity - O(n) */
/** 
The built-in `sort()` method in JavaScript typically uses a **Timsort** algorithm, which is a hybrid of merge sort and insertion sort. 

Here’s why its time complexity is **O(n log n)**:
- **Merge Sort**: It divides the array into smaller sub-arrays, sorts them, and merges them back together. The divide and merge process takes **log n** time, while sorting takes **O(n)** time, hence **O(n log n)**.
- **Insertion Sort**: For small sub-arrays, it uses insertion sort which is efficient in nearly sorted data, operating in **O(n)** time.

This combination ensures an average and worst-case time complexity of **O(n log n)**.
 */
export function findLargestElementBySorting(array) {
  array.sort((a, b) => a - b);
  return array[array.length - 1];
}
