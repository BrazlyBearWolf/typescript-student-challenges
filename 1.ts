let num: number[] = [5, 2, 8, 2, 7];

function minValue(x: number[]) {
  return Math.min(...x);
}
function maxValue(x: number[]) {
  return Math.max(...x);
}

console.log(minValue(num));
console.log(maxValue(num));
