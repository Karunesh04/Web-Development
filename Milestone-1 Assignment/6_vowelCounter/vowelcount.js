let personName = `karunesh`;
const vowels = new Set([`a`, `i`, `o`, `e`, `u`, `A`, `E`, `I`, `O`, `U`]);

((personName) => {
  let count = 0;
  for (let i = 0; i < personName.length; i++) {
    if (vowels.has(personName.charAt(i))) count++;
  }
  console.log(`The person's name has ${count} vowels.`);
})(`karunesh`);
