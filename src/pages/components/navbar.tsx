import React from 'react';
import styles from '@/styles/navbar.module.css'
import Link from 'next/link';
import { useContext } from 'react';
import { useCtx } from '../auth/ctx';

const Navbar = () => {
    const { isConnected } = useCtx()
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <p className={styles.logo}>ECAM</p>
                <nav className={styles.titles}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <Link href="/">
                                <p className={styles.a}>Home</p>
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/about">
                                <p className={styles.a}>About</p>
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/resources">
                                <p className={styles.a}>Resources</p>
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/pricing">
                                <p className={styles.a}>Pricing</p>
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/contact">
                                <p className={styles.a}>Contact</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {!isConnected ?
                    <Link href="/auth/login">
                        <div className={styles.button}>
                            Log in
                        </div>
                    </Link>
                    :
                    <Link href="/auth/logout">
                        <div className={styles.button}>
                            Logged in
                        </div>
                    </Link>

                }
            </div>
        </div>
    );
}

export default Navbar;