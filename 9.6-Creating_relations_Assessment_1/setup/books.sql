CREATE TABLE books
(
  book_id INTEGER PRIMARY KEY generated by default AS identity,
  title VARCHAR(255) NOT NULL,
  publication_year INTEGER NOT NULL,
  in_stock BOOLEAN NOT NULL DEFAULT 'true',
  author_id INTEGER REFERENCES authors(author_id)
);