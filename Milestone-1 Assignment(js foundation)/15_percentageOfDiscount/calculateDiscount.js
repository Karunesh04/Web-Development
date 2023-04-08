((ogPrice, disPrice) => {
  let discountPercent = (disPrice / ogPrice) * 100;
  console.log(
    `Heyy, You will save ${(ogPrice - discountPercent).toFixed(
      2
    )}% on this product!!`
  );
})(100, 80);
