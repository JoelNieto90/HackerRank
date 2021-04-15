function birthdayCakeCandles(candles) {
  let numberCandles = 0;
  let maxValue = Math.max(...candles);
  for(let i = 0; i < candles.length; i++) {
    if(maxValue == candles[i]) {
    numberCandles += 1;
  }
  }
  console.log(numberCandles)
}

let candles = [3, 2, 1, 3];

birthdayCakeCandles(candles);
