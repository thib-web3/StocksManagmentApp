import { createContext, useContext, useState } from 'react';

interface MyContext {
    isConnected: boolean;
}

const Context = createContext<MyContext>({
    isConnected: false,
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
        <Context.Provider value={{ isConnected }}>
            {children}
        </Context.Provider>
    );
};