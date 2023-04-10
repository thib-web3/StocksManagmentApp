import styles from '@/styles/statsSum.module.css'
import { useCtx } from '../auth/ctx';
import Image from 'next/image'
import user from '../../images/user.png'
import Search from './search';
import { Articles } from '../types/types';

const StatsSum = ({ articles }: Articles) => {
    const { userName, items } = useCtx()
    const total = articles.length
    const target = items.length
    const percentage = (target / total) * 100
    return (
        <div className={styles.dashboard}>

            <div className={styles.summary}>
                <div className={styles.left}>
                    <h2 className={styles.title}>📈 Live Stats</h2>
                    <div className={styles.user}>
                        <Image src={user} alt="Logo" width={40} height={40} />
                        {userName}
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.data}>
                        <div className={styles.number}>{items.length}</div>
                        <div className={styles.subject}>Targeted Articles</div>
                    </div>
                    <div className={styles.data}>
                        <div className={styles.number}>{articles.length}</div>
                        <div className={styles.subject}>Total Articles</div>
                    </div>
                    <div className={styles.data}>
                        <div className={styles.number}>{percentage.toFixed(1)}%</div>
                        <div className={styles.subject}>Percentage</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsSum;