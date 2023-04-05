import React from 'react';
import styles from '@/styles/navbar.module.css'
import Image from 'next/image'
import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <Image src={logo} alt="Logo" width={70} height={70} />
                <nav className={styles.titles}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><a href="#" className={styles.a}>Home</a></li>
                        <li className={styles.li}><a href="#" className={styles.a}>About</a></li>
                        <li className={styles.li}><a href="#" className={styles.a}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;