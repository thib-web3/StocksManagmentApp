import { createContext, useContext, useEffect, useState } from 'react';
import { Article, Item, Articles, Filter } from '../types/types';

interface MyContext {
    isConnected: boolean;
    setUserId: React.Dispatch<React.SetStateAction<number>>;
    userId: number;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    userName: string;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    items: Article[],
    setItems: React.Dispatch<React.SetStateAction<Article[]>>;
    searchbar: string;
    setSearchbar: React.Dispatch<React.SetStateAction<string>>;
    selectedItem: Article | undefined;
    setSelectedItem: React.Dispatch<React.SetStateAction<Article | undefined>>;
    itemDetailsClicked: boolean;
    setItemDetailsClicked: React.Dispatch<React.SetStateAction<boolean>>;
    data: Article[] | undefined;
    setData: React.Dispatch<React.SetStateAction<Article[] | undefined>>
    setFilters: React.Dispatch<React.SetStateAction<Filter[]>>;
    filters: Filter[]
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
    setItemDetailsClicked: () => { },
    data: undefined,
    setData: () => { },
    setFilters: () => { },
    filters: []
});


export const Ctx = ({ children }: any) => {
    const [isConnected, setIsConnected] = useState(false);
    const [userId, setUserId] = useState(0)
    const [userName, setUserName] = useState('')
    const [items, setItems,] = useState<Article[]>([])
    const [searchbar, setSearchbar] = useState('')
    const [selectedItem, setSelectedItem] = useState<Article | undefined>()
    const [itemDetailsClicked, setItemDetailsClicked] = useState(false);
    const [data, setData] = useState<Article[] | undefined>()
    const [filters, setFilters] = useState<Filter[]>([])

    const connect = async () => {
        setIsConnected(true);
    };

    const disconnect = async () => {
        setIsConnected(false);
        setUserId(0)
        setUserName('')
    };


    useEffect(() => {
        const filteredData: Article[] | undefined = data?.filter((item: Article) => {
            return item.REF.toLowerCase().startsWith(searchbar.toLowerCase()) ||
                item.Description.toLowerCase().startsWith(searchbar.toLowerCase())

        })
        if (filteredData !== undefined) {
            console.log('filteredData', filteredData)
            setItems(filteredData)
        }
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
        setItemDetailsClicked,
        data,
        setData,
        filters,
        setFilters
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