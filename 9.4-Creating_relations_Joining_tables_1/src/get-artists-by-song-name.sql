select a.artist_name, s.song_name, s.album_name
from artists a
inner join songs s
on a.artist_id = s.artist
where s.song_name like 'The%';