SELECT *
FROM authors a
RIGHT JOIN books b
ON a.author_id = b.author_id
WHERE b.publication_year < 2005 
AND a.nationality NOT LIKE 'United States of America';
