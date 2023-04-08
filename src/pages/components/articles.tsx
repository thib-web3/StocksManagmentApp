import styles from '@/styles/article.module.css'
import { useState } from 'react';
import Image from 'next/image'
import imgTest from '../../images/imageTest.jpeg'
const Articles = () => {
    const [value, setValue] = useState('')
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>📦 Articles List</h2>
            <div className={styles.articles}>
                {/* todo: foreach articles */}
                <div className={styles.article}>
                    <div className={styles.top}>
                        <div className={styles.imgContainer}>
                            <Image src={imgTest} alt="Logo" fill />
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.name}>Brosse Barentz Rond</div>
                        <div className={styles.ref}>Ref: #FPN0095</div>
                        <div className={styles.details}>Details</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;