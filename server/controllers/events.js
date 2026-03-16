import { pool } from '../config/database.js'

// Get all events for a specific location
export const getEventsByLocation = async (req, res) => {
  try {
    const locationId = parseInt(req.params.locationId)
    const results = await pool.query('SELECT * FROM events WHERE location_id = $1 ORDER BY date ASC', [locationId])
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}