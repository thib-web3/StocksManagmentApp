import { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

export default async function stocks(
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
        const data = req.body.data
        const [rows] = await connection.query(
            `SELECT * FROM stock WHERE REF = '${data}'`,
            [data]
        )
        return res.json(rows)
    } catch (error) {
        console.error('Error getting data:', error)
        res.status(500).send('Error getting data')
    } finally {
        await connection.end()
    }
}
