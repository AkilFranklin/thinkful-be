select 
    a.artist_name,
    c.concert_name,
    c.concert_date,
    ac.scheduled_start_at,
    ac.scheduled_end_at
from
    artists a
inner join
    artists_concerts ac
on 
    a.artist_id = ac.artist_id
inner join
    concerts c
on
    ac.concert_id = c.concert_id;