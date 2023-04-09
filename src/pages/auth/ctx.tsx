import { createContext, useContext, useEffect, useState } from 'react';
import { Item } from '../types/types';
import data from '../api/dataTest.json';

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
    searchbar: string;
    setSearchbar: React.Dispatch<React.SetStateAction<string>>;
    selectedItem: Item | undefined;
    setSelectedItem: React.Dispatch<React.SetStateAction<Item | undefined>>;
    itemDetailsClicked: boolean;
    setItemDetailsClicked: React.Dispatch<React.SetStateAction<boolean>>;
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
    setItems: () => { },
    setSearchbar: () => { },
    searchbar: '',
    selectedItem: undefined,
    setSelectedItem: () => { },
    itemDetailsClicked: false,
    setItemDetailsClicked: () => { }
});


export const Ctx = ({ children }: any) => {
    const [isConnected, setIsConnected] = useState(false);
    const [userId, setUserId] = useState(0)
    const [userName, setUserName] = useState('')
    const [items, setItems,] = useState<Item[]>([])
    const [searchbar, setSearchbar] = useState('')
    const [selectedItem, setSelectedItem] = useState<Item | undefined>()
    const [itemDetailsClicked, setItemDetailsClicked] = useState(false);

    const connect = async () => {
        setIsConnected(true);
    };

    const disconnect = async () => {
        setIsConnected(false);
        setUserId(0)
        setUserName('')
    };

    useEffect(() => {
        const filteredData: Item[] = data.filter((item) => {
            return item.name.toLowerCase().includes(searchbar.toLowerCase()) ||
                item.reference.toLowerCase().startsWith(searchbar.toLowerCase()) ||
                item.company.toLowerCase().startsWith(searchbar.toLowerCase())
        })
        setItems(filteredData)
    }, [searchbar])

    const values = {
        isConnected,
        setUserId,
        userId,
        userName,
        setUserName,
        connect,
        disconnect,
        items,
        setItems,
        searchbar,
        setSearchbar,
        selectedItem,
        setSelectedItem,
        itemDetailsClicked,
        setItemDetailsClicked
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