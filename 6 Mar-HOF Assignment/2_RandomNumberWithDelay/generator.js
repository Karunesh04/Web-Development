let numberGenerator = () => {
  return Math.random();
};

setTimeout(() => console.log("2 seconds remaining!"), 1000);
setTimeout(() => console.log("1 second remaining!"), 2000);
setTimeout(
  () => console.log(`Randomly generated number ${numberGenerator()}`g),
  3000
);
