CREATE TABLE books_genres
(
    PRIMARY KEY (book_id, genre_id),
    book_id           INTEGER REFERENCES books(book_id),
    genre_id          INTEGER REFERENCES genres(genre_id) 
);