import { useState } from 'react';
import Layout from '../components/layout';
import styles from '@/styles/auth.module.css'
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router'
import { addUser } from '../calls/dbCalls';
function validateEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter()
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (validateEmail(email)) {
            if (password == confirmPassword) {
                await addUser(email, password);
                toast.success('Account successfully created!')
                // router.push('/')
            } else {
                toast.error("Passwords doesn't match.")
            }
        } else {
            toast.error("Email is not acceptable.")

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
                <label>
                    Confirm Password:
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                <br />
                <button onClick={handleSubmit}>Submit</button>
                <Link href="/auth/login">
                    <p className={styles.register}>Already have an account ?</p>
                </Link>
            </form>
        </Layout>
    );
};

export default Login;


