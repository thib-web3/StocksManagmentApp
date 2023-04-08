import { createContext, useContext, useState } from 'react';

interface MyContext {
    isConnected: boolean;
    setUserId: React.Dispatch<React.SetStateAction<number>>;
    userId: number;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    userName: string;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
}

const Context = createContext<MyContext>({
    isConnected: false,
    setUserId: () => { },
    userId: 0,
    setUserName: () => { },
    userName: '',
    connect: async () => { },
    disconnect: async () => { },
});


export const Ctx = ({ children }: any) => {
    const [isConnected, setIsConnected] = useState(false);
    const [userId, setUserId] = useState(0)
    const [userName, setUserName] = useState('')
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
        disconnect
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