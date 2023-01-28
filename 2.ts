let num: number[] = [1, 2, 3, 6];

function sumNums(x: number[]) {
  let sum = 0;
  for (let i: number = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
}

console.log(sumNums(num));
