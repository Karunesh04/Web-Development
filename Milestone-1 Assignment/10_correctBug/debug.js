const quantity = [2, 3, 5, 6, 8];

function debug(arr) {
  let correctQuantity = arr.map((item) => (item *= 2));
  console.log(correctQuantity);
}

debug(quantity);
