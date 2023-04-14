((limit) => {
  while (limit-- != 1) {
    console.log(Math.floor(Math.random() * 100 + 1));
  }
})(100);
