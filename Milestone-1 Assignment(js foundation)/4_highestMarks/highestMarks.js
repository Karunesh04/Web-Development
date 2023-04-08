marks = [40, 35, 48, 50, 60];
let highest = 0;

marks.forEach((element) => {
  highest = element > highest ? element : highest;
});

console.log(`The Highest scored : ${highest}`);

