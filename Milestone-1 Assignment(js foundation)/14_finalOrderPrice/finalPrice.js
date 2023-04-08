const cart = [
  { unitPrice: 100, quantity: 5 },
  { unitPrice: 350, quantity: 7 },
  { unitPrice: 560, quantity: 10 },
  { unitPrice: 456, quantity: 3 },
];

const calculateCost = (cart) => {
  let totalcost = 0;
  cart.forEach((item) => {
    totalcost += item.unitPrice * item.quantity;
  });
  return `Total cost: ${totalcost}`;
};

console.log(calculateCost(cart));
