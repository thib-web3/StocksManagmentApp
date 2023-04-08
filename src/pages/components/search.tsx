import styles from '@/styles/search.module.css'
import { useCtx } from '../auth/ctx';
import { useState } from 'react';
import downArrow from '../../images/downArrow.png'
import Image from 'next/image'

const Search = () => {
    const [value, setValue] = useState('')
    const [isClicked, setIsClicked] = useState(false)
    const [isOptionsOpen, setIsOptionsOpen] = useState([false, false])

    const handleSymbol = (index: number) => {
        const newIsOptionsOpen = [...isOptionsOpen];
        newIsOptionsOpen[index] = !newIsOptionsOpen[index];
        setIsOptionsOpen(newIsOptionsOpen);
    };
    const handleClick = () => {
        console.log(isClicked)
        setIsClicked(!isClicked)
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2 className={styles.title}>🔎 Search</h2>
                <input className={styles.searchBar} value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search for articles, references and companies...' />
            </div>
            <div className={styles.right}>
                <h2 className={styles.title}>🎯 Filters</h2>
                <div className={styles.filters} onClick={handleClick} style={{ textAlign: 'left' }}>
                    <p className={styles.btnText}>
                        All Articles
                        <Image src={downArrow} alt="Logo" width={15} height={9} />
                    </p>
                    <div className={styles.dropdownContent}>
                        <div className={styles.options} onClick={() => handleSymbol(0)}>
                            <div className={styles.optionsContainer}>
                                <div className={styles.optionsTitle}>Companies</div>
                                <div className={styles.optionsSymbol}>{isOptionsOpen[0] ? '-' : '+'}</div>
                            </div>
                        </div>
                        <div className={styles.options} onClick={() => handleSymbol(1)}>
                            <div className={styles.optionsContainer}>
                                <div className={styles.optionsTitle}>Departments</div>
                                <div className={styles.optionsSymbol}>{isOptionsOpen[1] ? '-' : '+'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;