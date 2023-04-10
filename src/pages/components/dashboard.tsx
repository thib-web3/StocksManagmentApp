import styles from '@/styles/dashboard.module.css'
import Search from './search';
import StatsSum from './statsSum';
import Items from './items';
import { Articles } from '../types/types';


const Dashboard = ({ articles }: Articles) => {

    return (
        <div className={styles.dashboard}>
            <StatsSum articles={articles} />
            <Search articles={articles} />
            <Items />
        </div>
    );
};

export default Dashboard;