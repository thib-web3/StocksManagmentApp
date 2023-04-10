import styles from '@/styles/search.module.css'
import { useCtx } from '../auth/ctx';
import { useEffect, useState } from 'react';
import downArrow from '../../images/downArrow.png'
import Image from 'next/image'
import { Article, Articles, Supplier } from '../types/types';
import { getData, getSortedArticles } from '../calls/dbCalls';
import { toast } from 'react-hot-toast';

const Search = ({ articles }: Articles) => {
    const [isClicked, setIsClicked] = useState(false)
    const [isFilter1Checked, setIsFilter1Checked] = useState([false]);
    const [isFilter2Checked, setIsFilter2Checked] = useState([false]);
    const [isOptionsOpen, setIsOptionsOpen] = useState([false])
    const [suppliers, setSuppliers] = useState<Supplier[]>([])
    const [supplierName, setSupplierName] = useState('')
    const { searchbar, setSearchbar, setData, setItems, data, items } = useCtx()
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)

    const handleSymbol = async (index: number) => {
        if (index == 0) {
            const supp = await getData('suppliers')
            setSuppliers(supp)
        }
        isOptionsOpen[index] = !isOptionsOpen[index];
        setIsOptionsOpen(isOptionsOpen);
    };
    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    const handleCheckbox1 = async (item: Supplier, index: number) => {
        isFilter1Checked[index] = !isFilter1Checked[index];
        setIsFilter1Checked(isFilter1Checked)

        const suppliersSelected = suppliers?.filter((item: Supplier) => {
            return isFilter1Checked[suppliers.indexOf(item)];
        }).map((item: Supplier) => {
            return item.NOM;
        });

        const promises = suppliersSelected.map(async (supplier) => {
            const sortedArticles = await getSortedArticles('Supplier', supplier);
            return sortedArticles;
        });
        const sortedArticles = await Promise.all(promises);
        const combinedArray = sortedArticles.reduce((acc, val) => acc.concat(val), []);

        setData(combinedArray)
        setItems(combinedArray)


        const checkFilters = isFilter1Checked.find((filter) =>
            filter == true
        )

        if (!checkFilters) {
            setSearchbar('')
            setData(articles)
            setItems(articles)
        }
    }
    const handleCheckbox2 = (index: number) => {
        isFilter2Checked[index] = !isFilter2Checked[index];
        console.log('isFilter2Checked', isFilter2Checked)
        setIsFilter2Checked(isFilter2Checked)
        let newArr = []
        console.log(index)
        if (index = 0) {
            newArr = sortByPriceAscending(items)
        } else {
            newArr = sortByPriceDescending(items)
        }
        console.log(newArr)
    }

    const handleSearchBar = (e: any) => {
        setSearchbar(e.target.value)

    }

    const handleMinPrice = (e: any) => {
        const data = parseFloat(e.target.value)
        if (!isNaN(data)) {
            setMinPrice(data)
        }
    }
    const handleMaxPrice = (e: any) => {
        const data = parseFloat(e.target.value)
        if (!isNaN(data)) {
            setMaxPrice(data)
        }
    }

    const handleFilterPrice = () => {
        console.log(minPrice, maxPrice)
        if (minPrice > 0 && maxPrice > 0) {
            if (maxPrice > minPrice) {
                const arr = items.filter((item: Article) => parseFloat(item.Price) >= minPrice && parseFloat(item.Price) <= maxPrice)
                setData(arr)
                setItems(arr)
                toast.success(`Articles sorted from ${minPrice}$ to ${maxPrice}$`)
            } else {

                toast.error('Max price should be higher than min price!')
            }
        } else {
            toast.error('Wrong min and max price!')
        }
    }
    // todo: descending not working
    function sortByPriceDescending(items: Article[]) {
        return items.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price));
    }

    function sortByPriceAscending(items: Article[]) {
        return items.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
    }
    useEffect(() => {
        const checkFilters = isFilter1Checked.find((filter) =>
            filter == true
        )
        if (searchbar == '' && !checkFilters) {
            setData(articles)
            setItems(articles)
        }

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2 className={styles.title}>🔎 Search</h2>
                <input className={styles.searchBar} value={searchbar} onChange={(e) => handleSearchBar(e)} placeholder='Search for articles and references...' />
            </div>
            <div className={styles.right}>
                <h2 className={styles.title}>🎯 Filters</h2>
                <div className={styles.filters} onClick={handleClick} style={{ textAlign: 'left' }}>
                    <p className={styles.btnText}>
                        All Articles
                        <Image src={downArrow} alt="Logo" width={15} height={9} />
                    </p>
                    <div className={styles.dropdownContent}>

                        <div className={styles.options} style={{ marginTop: 10 }} onClick={() => handleSymbol(0)}>
                            <div className={styles.optionsContainer}>
                                <div className={styles.optionsTitle}>Companies</div>
                                <div className={styles.optionsSymbol}>{isOptionsOpen[0] ? '-' : '+'}</div>
                            </div>
                        </div>
                        {isOptionsOpen[0] &&
                            <div className={styles.underOptionsContainer}>
                                {suppliers?.map((item: Supplier) => (
                                    <div className={styles.underOptionsContent} key={item.FOU_ID} >
                                        <div className={styles.underOptionsContentContainer} onClick={() => handleCheckbox1(item, suppliers.indexOf(item))}>
                                            <p className={styles.optionsTitle}>{item.NOM}</p>
                                            <input type="checkbox" checked={isFilter1Checked[suppliers.indexOf(item)]} onChange={() => { }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                        <div className={styles.line}></div>
                        <div className={styles.options} onClick={() => handleSymbol(1)}>
                            <div className={styles.optionsContainer}>
                                <div className={styles.optionsTitle}>Price Direction</div>
                                <div className={styles.optionsSymbol}>{isOptionsOpen[1] ? '-' : '+'}</div>
                            </div>
                        </div>
                        {isOptionsOpen[1] &&
                            <div className={styles.underOptionsContainer}>
                                <div className={styles.underOptionsContent} onClick={() => handleCheckbox2(0)}>
                                    <div className={styles.underOptionsContentContainer}>
                                        <p className={styles.optionsTitle}>LOW to HIGH</p>
                                        <input type="checkbox" checked={isFilter2Checked[0]} onChange={() => { }} />
                                    </div>
                                </div>
                                <div className={styles.underOptionsContent} onClick={() => handleCheckbox2(1)}>
                                    <div className={styles.underOptionsContentContainer}>
                                        <p className={styles.optionsTitle}>HIGH to LOW</p>
                                        <input type="checkbox" checked={isFilter2Checked[1]} onChange={() => { }} />
                                    </div>
                                </div>
                            </div>
                        }
                        <div className={styles.line}></div>
                        <div className={styles.options} style={{ marginBottom: 10 }} onClick={() => handleSymbol(2)}>
                            <div className={styles.optionsContainer}>
                                <div className={styles.optionsTitle}>Price Interval</div>
                                <div className={styles.optionsSymbol}>{isOptionsOpen[2] ? '-' : '+'}</div>
                            </div>
                        </div>
                        {isOptionsOpen[2] &&
                            <div className={styles.underOptionsContainer}>
                                <div className={styles.priceContainer} >
                                    <input className={styles.price} type="text" placeholder='Min $' onChange={(e) => handleMinPrice(e)} />
                                    to
                                    <input className={styles.price} type="text" placeholder='Max $' onChange={(e) => handleMaxPrice(e)} />
                                    <div className={styles.buttonPrice} onClick={handleFilterPrice}>Filter</div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;