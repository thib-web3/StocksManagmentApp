import { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql2/promise'
export default async function addUser(
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
        const email = req.body.email
        const password = req.body.password
        console.log('updating db', email, password)
        const [rows] = await connection.execute(
            'INSERT INTO users (email, password) VALUES ( ?, ?)',
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
