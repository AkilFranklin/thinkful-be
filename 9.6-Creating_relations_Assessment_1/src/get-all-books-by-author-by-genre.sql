SELECT *
FROM authors a
RIGHT JOIN books b
ON a.author_id = b.author_id
INNER JOIN
books_genres bg
ON bg.book_id = b.book_id
LEFT JOIN genres g
ON g.genre_id = bg.genre_id
WHERE 
    a.author_name 
LIKE 
    'Leo Tolstoy' 
AND (
    g.genre_name LIKE 'autobiography' 
OR 
    g.genre_name LIKE 'history'
);