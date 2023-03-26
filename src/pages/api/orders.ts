import { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql2/promise'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tp3',
    })

    try {
        const [rows] = await connection.query('SELECT * FROM orders')
        return res.json(rows)
    } catch (error) {
        console.error('Error getting users:', error)
        res.status(500).send('Error getting users')
    } finally {
        await connection.end()
    }
}
