/** Time complexity - O(n) Space complexity - O(1) */
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

/** Time complexity - O(n^2) */
export function pattern2(n) {
  let str = '';

  for (let i = 0; i < n; i++) {
    for (let k = 0; k <= i; k++) {
      str += '* ';
    }
    str += '\n';
  }
  return str;
}

/** Time complexity - O(n^2) */
export function pattern3(n) {
  let str = '';

  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= i; k++) {
      str += `${k}`;
    }
    str += '\n';
  }
  return str;
}

/** Time complexity - O(n^2) */
export function pattern4(n) {
  let str = '';

  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= i; k++) {
      str += `${i}`;
    }
    str += '\n';
  }
  return str;
}
