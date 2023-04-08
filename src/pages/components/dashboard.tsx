import styles from '@/styles/dashboard.module.css'
import { useCtx } from '../auth/ctx';
import Image from 'next/image'
import user from '../../images/user.png'
import Search from './search';
import StatsSum from './statsSum';
import Articles from './articles';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <StatsSum />
            <Search />
            <Articles />
        </div>
    );
};

export default Dashboard;