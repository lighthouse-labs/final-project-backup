-- Drop and recreate likes table

DROP TABLE IF EXISTS likes CASCADE;
CREATE TABLE likes(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  song_id INTEGER NOT NULL REFERENCES songs(id) ON DELETE CASCADE

)