/* 
  Time complexity - O(n) 
  Space complexity - O(n) 
*/
export function countHighestLowestFrequencyElements(array) {
  let lowestFrequencyElement;
  let highestFrequencyElement;

  let maxFrequency = 0;
  let minFreq = array.length;

  const frequency = new Map();

  for (const n of array) {
    frequency.set(n, (frequency.get(n) || 0) + 1);
  }

  // Traverse the map to find the max and min frequency elements
  for (let [element, count] of frequency) {
    if (count > maxFrequency) {
      highestFrequencyElement = element;
      maxFrequency = count;
    }
    if (count < minFreq) {
      lowestFrequencyElement = element;
      minFreq = count;
    }
  }
  return [lowestFrequencyElement, highestFrequencyElement];
}
