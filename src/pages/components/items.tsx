import styles from '@/styles/items.module.css'
import { useState } from 'react';
import Image from 'next/image'
import box from '../../images/test.png'
import { useCtx } from '../auth/ctx';
import ItemDetails from './itemDetails';
import { Item } from '../types/types';

const Items = () => {
    const { items, setSelectedItem, setItemDetailsClicked, itemDetailsClicked } = useCtx()
    const openDetails = (item: Item) => {
        setItemDetailsClicked(!itemDetailsClicked)
        setSelectedItem(item)
    }
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>📦 Items List</h2>
            <div className={styles.test}>

                <div className={styles.articles} style={{ justifyContent: items.length < 4 ? 'flex-start' : 'space-around' }}>
                    {items.map((item) => (
                        <div key={item.reference}>
                            <div className={styles.article} onClick={() => openDetails(item)}>
                                <div className={styles.top}>
                                    <div className={styles.imgContainer}>
                                        <Image src={box} alt="Logo" width={160} style={{ zIndex: 1 }} />
                                    </div>
                                </div>
                                <div className={styles.bottom}>
                                    <div className={styles.name}>{item.name}</div>
                                    <div className={styles.ref}>Ref: #{item.reference}</div>
                                    <div className={styles.ref}>{item.company}</div>
                                    <div className={styles.details}>Details</div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Items;