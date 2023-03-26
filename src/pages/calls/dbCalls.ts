import mysql from 'mysql2/promise'
import { Order } from '../types/types'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tp3',
})
const localhost = 'http://localhost:3000'
export const getData = async (data: string) => {
    const res = await fetch(`${localhost}/api/${data}`)
    return await res.json()
}

export const getOrdersById = async (id: number) => {
    const [rows]: any = await pool.query('SELECT * FROM orders WHERE id = ?', [
        id,
    ])
    return rows[0]
}

export const updateData = async (id: number, status: string) => {
    const res = await fetch(`${localhost}/api/updateOrderStatus`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status }),
    })
    return res
}
