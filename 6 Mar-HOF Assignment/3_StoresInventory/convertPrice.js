const items = {
  item_1: 10, //USD
  item_2: 20, //USD
  item_3: 30, //USD
  item_4: 40, //USD
};
const exchangeRate = 80; //To INR

const convertedPrice = Object.entries(items).map(([item, price]) => {
  return [item, price * exchangeRate];
});

const convertedObject = Object.fromEntries(convertedPrice);

console.log(convertedObject);
