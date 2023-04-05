import { useState } from 'react';
import Layout from './components/layout';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
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
            </form>
        </Layout>
    );
};

export default Auth;