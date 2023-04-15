function swapValues(x, y) {
  [x, y] = [y, x];
  return [x, y];
}

let num1 = 45;
let num2 = 34;
console.log(swapValues(num1, num2));
