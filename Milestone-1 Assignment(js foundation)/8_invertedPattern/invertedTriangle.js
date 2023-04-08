let pattern = ``;
((count) => {
  for (let i = count; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      pattern += `*`;
    }
    pattern += `\n`;
  }
})(10);
console.log(pattern);
