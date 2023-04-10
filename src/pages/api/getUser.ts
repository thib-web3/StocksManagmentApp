import { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

export default async function getUser(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { email, password } = req.body

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: process.env.DB_NAME,
    })
    try {
        const [rows]: any = await connection.execute(
            'SELECT * FROM users WHERE email = ? AND password = ?',
            [email, password]
        )
        return res.json(rows)
    } catch (error) {
        console.error('Error getting users:', error)
        res.status(500).send('Error getting users')
    } finally {
        await connection.end()
    }
}
