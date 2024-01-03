CREATE TABLE artists_concerts
(
    artist_id           INTEGER REFERENCES artists(artist_id) unique,
    concert_id          INTEGER REFERENCES concerts(concert_id) unique,
    scheduled_start_at  TIME,
    scheduled_end_at  TIME,
    PRIMARY KEY (artist_id, concert_id)
);