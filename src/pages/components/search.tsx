import styles from '@/styles/search.module.css'
import { useCtx } from '../auth/ctx';
import { useState } from 'react';
import downArrow from '../../images/downArrow.png'
import Image from 'next/image'
import { Articles } from '../types/types';

const Search = ({ articles }: Articles) => {
    console.log('searchhh', articles)
    const [isClicked, setIsClicked] = useState(false)
    const [isFilter1Checked, setIsFilter1Checked] = useState([false]);
    const [isFilter2Checked, setIsFilter2Checked] = useState([false]);
    const [isOptionsOpen, setIsOptionsOpen] = useState([false])

    const { items, searchbar, setSearchbar, setData, data } = useCtx()
    setData(articles)

    const handleSymbol = (index: number) => {
        isOptionsOpen[index] = !isOptionsOpen[index];
        setIsOptionsOpen(isOptionsOpen);
    };
    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    const handleCheckbox1 = (index: number) => {
        isFilter1Checked[index] = !isFilter1Checked[index];
        console.log('isFilter1Checked', isFilter1Checked)
        setIsFilter1Checked(isFilter1Checked)
        const checkFilters = isFilter1Checked.find((filter) =>
            filter == true
        )
        console.log(checkFilters)
        if (checkFilters) {
            setSearchbar(articles[index].Supplier)
        } else {
            setSearchbar('')
        }
    }
    const handleCheckbox2 = (index: number) => {
        isFilter2Checked[index] = !isFilter2Checked[index];
        console.log('isFilter2Checked', isFilter2Checked)
        setIsFilter2Checked(isFilter2Checked)
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2 className={styles.title}>🔎 Search</h2>
                <input className={styles.searchBar} value={searchbar} onChange={(e) => setSearchbar(e.target.value)} placeholder='Search for articles, references and companies...' />
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
                                {articles.map((item) => (
                                    <div className={styles.underOptionsContent} key={item.ART_ID} >
                                        <div className={styles.underOptionsContentContainer} onClick={() => handleCheckbox1(articles.indexOf(item))}>
                                            <p className={styles.optionsTitle}>{item.Supplier}</p>
                                            <input type="checkbox" checked={isFilter1Checked[articles.indexOf(item)]} onChange={() => { }} />
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