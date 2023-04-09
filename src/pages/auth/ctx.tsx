import { createContext, useContext, useState } from 'react';
import { Item } from '../types/types';

interface MyContext {
    isConnected: boolean;
    setUserId: React.Dispatch<React.SetStateAction<number>>;
    userId: number;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    userName: string;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    items: Item[],
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const Context = createContext<MyContext>({
    isConnected: false,
    setUserId: () => { },
    userId: 0,
    setUserName: () => { },
    userName: '',
    connect: async () => { },
    disconnect: async () => { },
    items: [],
    setItems: () => { }
});


export const Ctx = ({ children }: any) => {
    const [isConnected, setIsConnected] = useState(false);
    const [userId, setUserId] = useState(0)
    const [userName, setUserName] = useState('')
    const [items, setItems,] = useState<Item[]>([])
    const connect = async () => {
        setIsConnected(true);
    };

    const disconnect = async () => {
        setIsConnected(false);
        setUserId(0)
        setUserName('')
    };

    const values = {
        isConnected,
        setUserId,
        userId,
        userName,
        setUserName,
        connect,
        disconnect,
        items,
        setItems
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    );
};
export function useCtx() {
    return useContext(Context);
}