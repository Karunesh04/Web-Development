function uniqueItems(array) {
  return new Set(array);
}

const numbers = [2, 233, 44, 55, 66, 66, 33, 33, 44, 34, 555, 2, 233, 44, 34];

console.log(uniqueItems(numbers));
