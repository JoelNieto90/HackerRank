const SimpleArray = (ar1, ar2) => {
  if (ar1.length == ar2.length) {
    let sum1 = 0,
      sum2 = 0;
    let totAr = [];
    for (let i = 0; i < ar1.length; i++) {
      if (ar1[i] > ar2[i]) {
        sum1 += 1;
      } else if (ar1[i] < ar2[i]) {
        sum2 += 1;
      } else {
        sum1 = sum1;
        sum2 = sum2;
      }
    }
    totAr.push(sum1, sum2);
    console.log(totAr);
  } else {
    return 0;
  }
};

let ar1 = [17, 28, 30];
let ar2 = [99, 16, 8];

SimpleArray(ar1, ar2);
