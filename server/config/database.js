import pg from 'pg'
import dotenv from 'dotenv'
import path from 'path'

// Explicitly tell dotenv where to look
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
      rejectUnauthorized: false
    }
}

export const pool = new pg.Pool(config)