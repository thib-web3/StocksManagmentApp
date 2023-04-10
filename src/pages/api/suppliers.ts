import { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

export default async function getSuppliers(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: process.env.DB_NAME,
    })

    try {
        const [rows] = await connection.query('SELECT * FROM suppliers')
        return res.json(rows)
    } catch (error) {
        console.error('Error getting suppliers:', error)
        res.status(500).send('Error getting suppliers')
    } finally {
        await connection.end()
    }
}
