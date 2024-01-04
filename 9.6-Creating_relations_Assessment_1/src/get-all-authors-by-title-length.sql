SELECT *
FROM authors a
LEFT JOIN books b
ON a.author_id = b.author_id
WHERE CHAR_LENGTH(b.title) > 25;
