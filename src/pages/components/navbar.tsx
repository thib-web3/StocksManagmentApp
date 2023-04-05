import React from 'react';
import styles from '@/styles/navbar.module.css'


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <p className={styles.logo}>ECAM</p>
                <nav className={styles.titles}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><a href="#" className={styles.a}>Home</a></li>
                        <li className={styles.li}><a href="#" className={styles.a}>About</a></li>
                        <li className={styles.li}><a href="#" className={styles.a}>Resources</a></li>
                        <li className={styles.li}><a href="#" className={styles.a}>Pricing</a></li>
                        <li className={styles.li}><a href="#" className={styles.a}>Contact</a></li>
                    </ul>
                </nav>
                <div className={styles.button}>
                    Login
                </div>
            </div>
        </div>
    );
}

export default Navbar;