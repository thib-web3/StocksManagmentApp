import React from 'react';
import styles from '@/styles/navbar.module.css'
import Link from 'next/link';
import { useContext } from 'react';
import { useCtx } from '../auth/ctx';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const Navbar = () => {
    const router = useRouter()
    const { disconnect, isConnected, userId } = useCtx()
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (isConnected) {
            {
                await disconnect()
                router.push('/')
                toast.success('Successfully Logged out!')
            }
        }
    };
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

                    <div className={styles.button} onClick={handleSubmit}>
                        Log out
                    </div>


                }
            </div>
        </div>
    );
}

export default Navbar;