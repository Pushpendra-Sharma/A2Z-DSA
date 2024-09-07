/** Time complexity - O(n) Space complexity - O(1) */
export function pattern1(n) {
  let str = '';
  let line = '';
  for (let k = 0; k < n; k++) {
    line += '* ';
  }
  for (let i = 0; i < n; i++) {
    str += line + '\n ';
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
    str += '\n ';
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
    str += '\n ';
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
    str += '\n ';
  }
  return str;
}

/** Time complexity - O(n^2) */
export function pattern5(n) {
  let str = '';

  for (let i = 0; i < n; i++) {
    for (let k = i; k < n; k++) {
      str += `${k}`;
    }
    str += '\n ';
  }
  return str;
}

/** Time complexity - O(n^2) */
export function pattern6(n) {
  let str = '';

  for (let i = n; i > 0; i--) {
    for (let k = 1; k <= i; k++) {
      str += `${k}`;
    }
    str += '\n ';
  }
  return str;
}

/** Time complexity - O(n^2) */
export function pattern11(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += `${(i + j + 1) % 2}`;
    }
    str += '\n ';
  }
  return str;
}
console.log('::: ', pattern11(5));
