let input = "Hi! I am a human.";
console.log(input);
setTimeout(() => {
  let reversed = input.split("").reverse().join("");
  console.log(reversed);
}, 2000);
