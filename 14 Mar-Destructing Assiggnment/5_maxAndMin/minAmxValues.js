function findValues(array) {
  let max = Math.max(...array);
  let min = Math.min(...array);
  return {
    max,
    min,
  };
}

const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];

console.log(findValues(numbers));
