const books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2010,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 2012,
  },
];

const filteredBooks = books.filter((book) => book.year >= 2010);

const capitalizedBooks = filteredBooks.map((book) => {
  const capitalizedAuthor = book.author.toUpperCase();
  return { title: book.title, author: capitalizedAuthor };
});

console.log(capitalizedBooks);
