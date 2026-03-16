import express from 'express'
import { getLocations, getLocationById } from '../controllers/locations.js'

const router = express.Router()

// Define routes to get locations
router.get('/', getLocations)
router.get('/:id', getLocationById)

export default router