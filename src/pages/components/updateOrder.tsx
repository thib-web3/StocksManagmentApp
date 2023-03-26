import { useState } from 'react';
import { updateData } from '../calls/dbCalls';


const OrderForm = () => {
    const [id, setId] = useState(0);
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await updateData(id, status);
        console.log(res);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input type="number" value={id} onChange={(e) => setId(Number(e.target.value))} />
            </label>
            <label>
                Status:
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
            </label>
            <button type="submit">Update</button>
        </form>
    );
};
export default OrderForm