const numbers = [2, 3, 8, 9, 33, 77, 88];
let divisibles = [];
((array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0 && array[i] % 2 != 0) {
      divisibles.push(array[i]);
    }
  }
})(numbers);
console.log(`Divisibles are: `, divisibles);
