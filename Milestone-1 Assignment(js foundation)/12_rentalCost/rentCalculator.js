let numberOfDays = 10;
let carType = `Midsize`;

function calculateRent(type, days) {
  if (type === `Economy`) return 4000 * days;

  if (type === `Midsize`) return 10000 * days;

  if (type === `Luxury`) return 20000 * days;
}

console.log(
  `Total rent for car type ${carType}- `,
  calculateRent(carType, numberOfDays)
);
