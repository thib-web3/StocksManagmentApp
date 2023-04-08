import { useState } from 'react';
import Layout from '../components/layout';
import styles from '@/styles/auth.module.css'
import Link from 'next/link';
import { getUser } from '../calls/dbCalls';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router'
import { Ctx, useCtx } from '../auth/ctx';

const isRegistered = async (email: string, password: string) => {
    const user = await getUser(email, password)
    console.log(user)
    if (user.length > 0) {
        toast.success('Successfully Logged in!')
        return user
    } else {
        toast.error('Wrong Email or Password.')
        return false
    }
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const { connect, isConnected, setUserId, setUserName, userName } = useCtx()
    const handleConnect = async () => {
        if (!isConnected) {
            await connect()
        }
    };
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const user = await isRegistered(email, password)
        if (user) {
            await handleConnect()
            setUserId(user[0].id)
            setUserName(user[0].name)
            router.push('/')
        }
    };
    return (
        <Layout>
            <form>
                <label>
                    Email:
                    <input className='button' style={{ textAlign: 'left' }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input className='button' style={{ textAlign: 'left' }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <Link href="/auth/register">
                    <p className={styles.register}>Don&apos;t have an account ?</p>
                </Link>
                <br />
                <button onClick={handleSubmit} className='buttonCta'>Submit</button>
            </form>
        </Layout>
    );
};

export default Login;