const SimpleArray = (n) => {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  return sum;
};

let array = [1, 6, 7, 10];

SimpleArray(array);
