/* 
  Time complexity - O(n) 
  Space complexity - O(n) 
*/
export function frequencyCounter(array) {
  // Create a new Map to store the frequency of each element
  const frequency = new Map();

  // Loop through each element in the array
  for (const n of array) {
    // If the element already exists in the map, increment its count
    if (frequency.has(n)) frequency.set(n, frequency.get(n) + 1);
    // If the element doesn't exist, initialize its count to 1
    else frequency.set(n, 1);
  }

  return frequency;
}
