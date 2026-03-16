import express from 'express'
import { getEventsByLocation } from '../controllers/events.js'

const router = express.Router()

// Define route to get events for a specific location
router.get('/location/:locationId', getEventsByLocation)

export default router