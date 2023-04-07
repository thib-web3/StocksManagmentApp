import { useState } from 'react';
import Layout from '../components/layout';
import styles from '@/styles/auth.module.css'
import { useRouter } from 'next/router'
import { useCtx } from '../auth/ctx';

const Logout = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const { disconnect, isConnected, userId } = useCtx()

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (isConnected) {
            {
                await disconnect()
                router.push('/')
            }
        }
    };
    return (
        <Layout>
            <form>
                Do you want to log out ?
                <br />
                <button onClick={handleSubmit} className='buttonCta'>Log out</button>

            </form>
        </Layout>
    );
};

export default Logout;