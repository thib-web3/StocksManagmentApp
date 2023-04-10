import { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()
export default async function addUser(
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
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const [rows] = await connection.execute(
            'INSERT INTO users (name, email, password) VALUES ( ?, ?, ?)',
            [name, email, password]
        )
        return res.json(rows)
    } catch (error) {
        console.error('Error getting users:', error)
        res.status(500).send('Error getting users')
    } finally {
        await connection.end()
    }
}
