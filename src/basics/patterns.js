/** TIme complexity - O(n) Space complexity - O(1) */
export function pattern1(n) {
  let str = '';
  let line = '';
  for (let k = 0; k < n; k++) {
    line += '* ';
  }
  for (let i = 0; i < n; i++) {
    str += line + '\n';
  }
  return str;
}
