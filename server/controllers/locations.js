import { pool } from '../config/database.js'

// Get all locations
export const getLocations = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM locations ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

// Get a single location by its ID
export const getLocationById = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('SELECT * FROM locations WHERE id = $1', [id])
    res.status(200).json(results.rows[0]) // Return just the single object
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}