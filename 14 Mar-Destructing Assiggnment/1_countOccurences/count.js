function wordCount(text) {
  const words = text.split(" ");
  const wordCount = new Map();
  for (const word of words) {
    if (wordCount.has(word)) {
      wordCount.set(word, wordCount.get(word) + 1);
    } else {
      wordCount.set(word, 1);
    }
  }
  return wordCount;
}

let input =
  "A function which takes an input as string and return the words available in that string with their count";

console.log(wordCount(input));
