const plusMinus = (arr) => {
  let arrPos = 0;
  let arrNeg = 0;
  let arrZero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arrZero += 1;
    } else if (arr[i] < 0) {
      arrNeg += 1;
    } else {
      arrPos += 1;
    }
  }
  console.log((arrPos / arr.length).toFixed(6));
  console.log((arrNeg / arr.length).toFixed(6));
  console.log((arrZero / arr.length).toFixed(6));
}

let arr = [-4, 3, -9, 0, 4, 1]

plusMinus(arr)