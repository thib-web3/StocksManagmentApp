import { createContext, useContext, useState } from 'react';

interface MyContext {
    isConnected: boolean;
    setUserId: React.Dispatch<React.SetStateAction<number>>
    userId: number;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
}

const Context = createContext<MyContext>({
    isConnected: false,
    setUserId: () => { },
    userId: 0,
    connect: async () => { },
    disconnect: async () => { },
});


export const Ctx = ({ children }: any) => {
    const [isConnected, setIsConnected] = useState(false);
    const [userId, setUserId] = useState(0)
    const connect = async () => {
        setIsConnected(true);
    };

    const disconnect = async () => {
        setIsConnected(false);
        setUserId(0)
    };

    return (
        <Context.Provider value={{ isConnected, setUserId, userId, connect, disconnect }}>
            {children}
        </Context.Provider>
    );
};
export function useCtx() {
    return useContext(Context);
}