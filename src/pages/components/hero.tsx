import React from 'react';
import styles from '@/styles/hero.module.css'
import Image from 'next/image'
import imgHero from '../../images/img-hero.svg'
import Link from 'next/link';
import { useRouter } from 'next/router'

const Hero = () => {
    const router = useRouter()
    return (
        <div className={styles.hero}>
            <div className={styles.left}>
                <h1 className={styles.mainTitle}>Manage All Your <br />Boring Stocks<br />With ECAM</h1>
                <p className={styles.description}>Utilize our one-stop-shop software built for you.<br />Never worry again with boring stock management.</p>
                <div className={styles.buttons}>
                    <Link href="/auth/register">
                        <div className={styles.buttonCta}>Get Started for free</div>
                    </Link>
                    <div className={styles.buttonDemo} onClick={() => router.push('mailto:contact@thibautlehmann.dev')}>Book a demo</div>
                </div>
            </div>
            <div className={styles.right} >
                <Image src={imgHero} alt="Logo" width={500} height={500} />
            </div>
        </div>
    );
}

export default Hero;