import React, { ReactNode } from 'react';
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from './navbar'

type Props = {
    children: ReactNode;
};
const Layout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>Projet BDD</title>
                <meta name="description" content="Projet BDD" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.container}>
                    {children}
                </div>
            </main>
        </>
    );
};

export default Layout;