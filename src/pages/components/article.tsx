import styles from '@/styles/search.module.css'
import { useState } from 'react';
import Image from 'next/image'

const Article = () => {
    const [value, setValue] = useState('')
    return (
        <div className={styles.article}>
            Article
        </div>
    );
};

export default Article;