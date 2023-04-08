import { useState } from 'react';
import Layout from '../components/layout';
import styles from '@/styles/dashboard.module.css'
import { useRouter } from 'next/router'
import { useCtx } from '../auth/ctx';

const Dashboard = () => {

    const { disconnect, isConnected, userId } = useCtx()

    return (
        <div className={styles.dashboard}>
            Dashboard
        </div>
    );
};

export default Dashboard;