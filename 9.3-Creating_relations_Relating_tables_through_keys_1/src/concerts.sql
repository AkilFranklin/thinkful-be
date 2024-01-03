CREATE TABLE concerts
(
    concert_id          INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    concert_name        VARCHAR(255) NOT NULL,
    concert_date        DATE NOT NULL
);