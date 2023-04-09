import styles from '@/styles/search.module.css'
import { useCtx } from '../auth/ctx';
import { useEffect, useState } from 'react';
import downArrow from '../../images/downArrow.png'
import Image from 'next/image'
import data from '../api/dataTest.json';

interface Item {
    name: string,
    reference: string,
    company: string
}

const Search = () => {
    const [value, setValue] = useState('')
    const [results, setResults] = useState<Item[]>([])
    const [isClicked, setIsClicked] = useState(false)
    const [isFilter1Checked, setIsFilter1Checked] = useState([false]);
    const [isFilter2Checked, setIsFilter2Checked] = useState([false]);
    const [isOptionsOpen, setIsOptionsOpen] = useState([false])

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
    }
    const handleCheckbox2 = (index: number) => {
        isFilter2Checked[index] = !isFilter2Checked[index];
        console.log('isFilter2Checked', isFilter2Checked)
        setIsFilter2Checked(isFilter2Checked)
    }
    useEffect(() => {
        const filteredData: Item[] = data.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase()) ||
                item.reference.toLowerCase().startsWith(value.toLowerCase()) ||
                item.company.toLowerCase().startsWith(value.toLowerCase())
        })
        setResults(filteredData)
    }, [value])
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2 className={styles.title}>🔎 Search</h2>
                <input className={styles.searchBar} value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search for articles, references and companies...' />
            </div>
            {value.length > 0 && results.map((item) => (
                <div key={item.reference}>
                    <p>{item.name}</p>
                    <p>{item.reference}</p>
                    <p>{item.company}</p>
                </div>
            ))}
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
                                <div className={styles.underOptionsContent} >
                                    <div className={styles.underOptionsContentContainer} onClick={() => handleCheckbox1(0)}>
                                        <p className={styles.optionsTitle}>Company1</p>
                                        <input type="checkbox" checked={isFilter1Checked[0]} onChange={() => { }} />
                                    </div>
                                </div>
                                <div className={styles.underOptionsContent} onClick={() => handleCheckbox1(1)}>
                                    <div className={styles.underOptionsContentContainer}>
                                        <p className={styles.optionsTitle}>Company2</p>
                                        <input type="checkbox" checked={isFilter1Checked[1]} onChange={() => { }} />
                                    </div>
                                </div>
                                <div className={styles.underOptionsContent} onClick={() => handleCheckbox1(2)}>
                                    <div className={styles.underOptionsContentContainer}>
                                        <p className={styles.optionsTitle}>Company3</p>
                                        <input type="checkbox" checked={isFilter1Checked[2]} onChange={() => { }} />
                                    </div>
                                </div>
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