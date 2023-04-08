import styles from '@/styles/dashboard.module.css'
import { useCtx } from '../auth/ctx';
import Image from 'next/image'
import user from '../../images/user.png'
import Search from './search';
import StatsSum from './statsSum';
import Article from './article';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <StatsSum />
            <Search />
            <h2 className={styles.title}>📦 Articles List</h2>
            <Article />
        </div>
    );
};

export default Dashboard;