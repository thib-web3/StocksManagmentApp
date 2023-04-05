import { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql2/promise'

export default async function getUser(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { email, password } = req.body

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tp3',
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
