import mysql from 'mysql2/promise'

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

export const updateData = async (
    id: number,
    data: string,
    dataToUpdate: string
) => {
    const res = await fetch(`${localhost}/api/updateOrder`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, data, dataToUpdate }),
    })
    return res
}
