// function extract(array) {
//   [a, b, c] = [array[0], array[1], array[array.length - 1]];
//   return [a, b, c];
// }

function extractElements(array) {
  const [first, second, ...rest] = array;
  const last = rest.pop();
  return [first, second, last];
}
let numbers = [1, 2, 4, 5, 6, 7];
console.log(extractElements(numbers));
