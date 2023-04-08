import { useState } from 'react';
import Layout from '../components/layout';
import styles from '@/styles/dashboard.module.css'
import { useRouter } from 'next/router'
import { useCtx } from '../auth/ctx';
import Image from 'next/image'
import user from '../../images/user.png'

const Dashboard = () => {

    const { disconnect, isConnected, userId, userName } = useCtx()

    return (
        <>
            <div className={styles.summary}>
                <div className={styles.left}>
                    <div className={styles.title}>📈 Stats Summary</div>
                    <div className={styles.user}><Image src={user} alt="Logo" width={40} height={40} />{userName}</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.data}>
                        <div className={styles.number}>12</div>
                        <div className={styles.subject}>Total References</div>
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
        </>
    );
};

export default Dashboard;