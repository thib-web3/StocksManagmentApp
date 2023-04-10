import styles from '@/styles/search.module.css'
import { useCtx } from '../auth/ctx';
import { useEffect, useState } from 'react';
import downArrow from '../../images/downArrow.png'
import Image from 'next/image'
import { Articles, Supplier } from '../types/types';
import { getData, getSortedArticles } from '../calls/dbCalls';

const Search = ({ articles }: Articles) => {
    const [isClicked, setIsClicked] = useState(false)
    const [isFilter1Checked, setIsFilter1Checked] = useState([false]);
    const [isFilter2Checked, setIsFilter2Checked] = useState([false]);
    const [isOptionsOpen, setIsOptionsOpen] = useState([false])
    const [suppliers, setSuppliers] = useState<Supplier[]>([])
    const [supplierName, setSupplierName] = useState('')
    const { searchbar, setSearchbar, setData, setItems } = useCtx()



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

        const sortedArticles = await getSortedArticles('Supplier', item.NOM)
        setData(sortedArticles)
        setItems(sortedArticles)

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
    }

    const handleSearchBar = (e: any) => {
        setSearchbar(e.target.value)
        if (searchbar == '') {
            // setData(articles)
        }
    }
    useEffect(() => {
        // setItems(articles)
    },)
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
                                <div className={styles.optionsTitle}>Departments</div>
                                <div className={styles.optionsSymbol}>{isOptionsOpen[1] ? '-' : '+'}</div>
                            </div>
                        </div>
                        {isOptionsOpen[1] &&
                            <div className={styles.underOptionsContainer}>
                                <div className={styles.underOptionsContent} onClick={() => handleCheckbox2(0)}>
                                    <div className={styles.underOptionsContentContainer}>
                                        <p className={styles.optionsTitle}>Department1</p>
                                        <input type="checkbox" checked={isFilter2Checked[0]} onChange={() => { }} />
                                    </div>
                                </div>
                                <div className={styles.underOptionsContent} onClick={() => handleCheckbox2(1)}>
                                    <div className={styles.underOptionsContentContainer}>
                                        <p className={styles.optionsTitle}>Department1</p>
                                        <input type="checkbox" checked={isFilter2Checked[1]} onChange={() => { }} />
                                    </div>
                                </div>
                                <div className={styles.underOptionsContent} onClick={() => handleCheckbox2(2)}>
                                    <div className={styles.underOptionsContentContainer}>
                                        <p className={styles.optionsTitle}>Department1</p>
                                        <input type="checkbox" checked={isFilter2Checked[2]} onChange={() => { }} />
                                    </div>
                                </div>
                            </div>
                        }
                        <div className={styles.line}></div>
                        <div className={styles.options} style={{ marginBottom: 10 }} onClick={() => handleSymbol(2)}>
                            <div className={styles.optionsContainer}>
                                <div className={styles.optionsTitle}>Price</div>
                                <div className={styles.optionsSymbol}>{isOptionsOpen[2] ? '-' : '+'}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;