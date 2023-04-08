const customer = {
  name: `Jhonson`,
  balance: 8000,
};

function updater(transactionType, amount) {
  if (transactionType == `deposit`) {
    this.balance += amount;
  }
  if (transactionType == `withdrawal`) {
    if (amount <= this.balance) this.balance -= amount;
    else console.log(`O.oohh! Insufficient balance.`);
  }
}

updater.call(customer, `withdrawal`, 8500);

updater.call(customer, `withdrawal`, 5000);
console.log(customer);

updater.call(customer, `deposit`, 1000);
console.log(customer);
