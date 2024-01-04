SELECT *
FROM authors a
RIGHT JOIN books b
ON a.author_id = b.author_id
WHERE b.in_stock is FALSE;
