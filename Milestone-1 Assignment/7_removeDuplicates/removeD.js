const cart = [`shoes`, `shirt`, `shoes`, `pant`, `pant`, `shirt`];
console.log(cart);
let newCart = [];
((arr) => {
  arr.forEach((ele) => {
    if (!newCart.includes(ele)) newCart.push(ele);
  });
  console.log(`After removing duplicate items : `);
  console.log(newCart);
})(cart);
