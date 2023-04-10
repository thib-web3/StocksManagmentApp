import { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: process.env.DB_NAME,
//     })

//     try {
//         const id = parseInt(req.body.id)
//         const data = req.body.data
//         const dataToUpdate = req.body.dataToUpdate
//         const [rows] = await connection.query(
//             `UPDATE orders SET ${dataToUpdate} = ? WHERE order_id = ?`,
//             [data, id]
//         )
//         return res.json(rows)
//     } catch (error) {
//         console.error('Error getting users:', error)
//         res.status(500).send('Error getting users')
//     } finally {
//         await connection.end()
//     }
// }
