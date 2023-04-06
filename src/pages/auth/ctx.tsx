import { createContext, useContext, useState } from 'react';

interface MyContext {
    isConnected: boolean;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>
}

const Context = createContext<MyContext>({
    isConnected: false,
    connect: async () => { },
    disconnect: async () => { }
});


export const Ctx = ({ children }: any) => {
    const [isConnected, setIsConnected] = useState(false);

    const connect = async () => {
        setIsConnected(true);
    };

    const disconnect = async () => {
        setIsConnected(false);
    };

    return (
        <Context.Provider value={{ isConnected, connect, disconnect }}>
            {children}
        </Context.Provider>
    );
};
export function useCtx() {
    return useContext(Context);
}