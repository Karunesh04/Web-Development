function calculate(costOfDish, numberOfPeople) {
  let totalBill = costOfDish * numberOfPeople;
  let billPerPerson = totalBill / numberOfPeople;

  return {
    total_Bill: totalBill,
    bill_Per_Person: billPerPerson,
  };
}

console.log(calculate(50, 10));
