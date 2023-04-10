import styles from '@/styles/statsSum.module.css'
import { useCtx } from '../auth/ctx';
import Image from 'next/image'
import user from '../../images/user.png'
import Search from './search';

const StatsSum = () => {
    const { userName, items } = useCtx()
    return (
        <div className={styles.dashboard}>

            <div className={styles.summary}>
                <div className={styles.left}>
                    <h2 className={styles.title}>📈 Stats Summary</h2>
                    <div className={styles.user}>
                        <Image src={user} alt="Logo" width={40} height={40} />
                        {userName}
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.data}>
                        <div className={styles.number}>{items.length}</div>
                        <div className={styles.subject}>Total Articles</div>
                    </div>
                    <div className={styles.data}>
                        <div className={styles.number}>329</div>
                        <div className={styles.subject}>Total Stocks</div>
                    </div>
                    <div className={styles.data}>
                        <div className={styles.number}>32%</div>
                        <div className={styles.subject}>Total</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsSum;