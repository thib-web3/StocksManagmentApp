import styles from '@/styles/article.module.css'
import { useState } from 'react';
import Image from 'next/image'
import imgTest from '../../images/imageTest.jpeg'
import { useCtx } from '../auth/ctx';
const Items = () => {
    const [value, setValue] = useState('')
    const { setItems, items } = useCtx()
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>📦 Items List</h2>
            <div className={styles.articles}>
                {/* todo: foreach articles */}
                {items.map((item) => (
                    <div key={item.reference}>
                        <div className={styles.article}>
                            <div className={styles.top}>
                                <div className={styles.imgContainer}>
                                    <Image src={imgTest} alt="Logo" fill />
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
    );
};

export default Items;