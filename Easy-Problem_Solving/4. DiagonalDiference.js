function diagonalDifference(arr) {
  const n = arr.length;
  let diagRight = 0;
  let diagLeft = 0;
  let diagSum = 0;

  for (let i = 0; i < n; i++) {
    diagRight += arr[i][i];
    diagLeft += arr[i][n - 1 - i];
  }
  diagSum = Math.abs(diagRight - diagLeft);
  return diagSum;
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]

diagonalDifference(arr)