select a.artist_id, a.artist_name, s.song_name
from artists a
inner join songs s
on a.artist_id = s.artist;