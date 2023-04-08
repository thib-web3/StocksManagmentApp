import styles from '@/styles/search.module.css'
import { useCtx } from '../auth/ctx';
import { useState } from 'react';
import downArrow from '../../images/downArrow.png'
import Image from 'next/image'

const Search = () => {
    const [value, setValue] = useState('')
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2 className={styles.title}>🔎 Search</h2>
                <input className={styles.searchBar} value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search for articles, references and companies...' />
            </div>
            <div className={styles.right}>
                <h2 className={styles.title}>🎯 Filters</h2>
                <div className={styles.filters}>All Articles
                    <Image src={downArrow} alt="Logo" width={15} height={9} />
                </div>

            </div>
        </div>
    );
};

export default Search;