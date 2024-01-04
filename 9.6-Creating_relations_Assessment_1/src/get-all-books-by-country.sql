SELECT *
FROM authors a
RIGHT JOIN books b
ON a.author_id = b.author_id
WHERE a.nationality like 'China' OR a.nationality like 'Turkey';
