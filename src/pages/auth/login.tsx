import { useContext, useState } from 'react';
import Layout from '../components/layout';
import styles from '@/styles/auth.module.css'
import Link from 'next/link';
import { getUser } from '../calls/dbCalls';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router'
import { Ctx, useCtx } from '../auth/ctx';

const isRegistered = async (email: string, password: string) => {
    const user = await getUser(email, password)
    if (user.length > 0) {
        toast.success('Successfully Logged in!')
        console.log('user existing')
        return user
    } else {
        console.log('user not existing')
        toast.error('Wrong Email or Password.')
        return false
    }
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const { connect, disconnect, isConnected } = useCtx()
    const handleConnect = async () => {
        if (!isConnected) {
            await connect()
        } else {
            await disconnect()
        }
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const user = await isRegistered(email, password)
        if (user) {
            await handleConnect()
            router.push('/')
        }
    };
    return (
        <Layout>
            <form>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button onClick={handleSubmit}>Submit</button>
                <Link href="/auth/register">
                    <p className={styles.register}>Don&apos;t have an account ?</p>
                </Link>
            </form>
        </Layout>
    );
};

export default Login;