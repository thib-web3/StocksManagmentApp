import { createContext, useContext, useState } from 'react';
import mysql from 'mysql2/promise';

interface IMySQLContext {
    isConnected: boolean;
    connection?: mysql.Connection;
}

const MySQLContext = createContext<IMySQLContext>({
    isConnected: false,
});

export const useMySQL = () => useContext(MySQLContext);

export const MySQLProvider = ({ children }: any) => {
    const [isConnected, setIsConnected] = useState(false);
    const [connection, setConnection] = useState<mysql.Connection>();

    const connect = async () => {
        const conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'mydatabase',
        });

        setConnection(conn);
        setIsConnected(true);
    };

    const disconnect = async () => {
        if (connection) {
            await connection.end();
            setIsConnected(false);
        }
    };

    return (
        <MySQLContext.Provider value={{ isConnected, connection }}>
            {children}
        </MySQLContext.Provider>
    );
};