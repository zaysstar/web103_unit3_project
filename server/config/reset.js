import { pool } from './database.js'

const createTables = async () => {
  const createLocationsTableQuery = `
    DROP TABLE IF EXISTS events;
    DROP TABLE IF EXISTS locations;
    
    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      image_url TEXT NOT NULL,
      description TEXT NOT NULL
    );
  `

  const createEventsTableQuery = `
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      date TIMESTAMP NOT NULL,
      description TEXT NOT NULL,
      location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE
    );
  `

  try {
    await pool.query(createLocationsTableQuery)
    await pool.query(createEventsTableQuery)
    console.log('🎉 Tables created successfully')
    
    // Insert Locations
    await pool.query(`
      INSERT INTO locations (name, image_url, description) VALUES 
      ('Echo Lounge', 'https://via.placeholder.com/400', 'A neon-lit cybercore gathering space.'),
      ('House of Blues', 'https://via.placeholder.com/400', 'Classic venue updated with holographic acoustics.'),
      ('The Pavilion', 'https://via.placeholder.com/400', 'Open-air digital arts arena.'),
      ('American Airlines Arena', 'https://via.placeholder.com/400', 'Massive e-sports and tech convention center.')
    `)
    console.log('🏢 Locations seeded')

    // Insert Events (Tied to the location IDs 1, 2, 3, and 4)
    await pool.query(`
      INSERT INTO events (title, date, description, location_id) VALUES 
      ('Neon Nights DJ Set', '2026-03-20 22:00:00', 'Local DJs spinning cybercore tracks.', 1),
      ('Retro Gaming Meetup', '2026-03-25 18:00:00', 'Bring your own vintage handhelds and fight for the high score.', 1),
      ('Holographic Indie Showcase', '2026-03-22 19:00:00', 'Live bands with interactive AR visuals.', 2),
      ('Digital Arts Expo', '2026-04-05 10:00:00', 'Outdoor gallery of interactive light sculptures.', 3),
      ('E-Sports Championship Final', '2026-04-15 14:00:00', 'The biggest gaming tournament of the year. Get your tickets now.', 4)
    `)
    console.log('📅 Events seeded')

  } catch (err) {
    console.error('⚠️ Error creating tables', err)
  }
}

createTables()