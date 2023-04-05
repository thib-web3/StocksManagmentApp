import { Props } from '../types/types'

export default function OrderPage({ orders }: Props) {
    return (
        <>
            {orders.map((order) => (
                <div key={order.order_id}>
                    <h2>{order.order_time}</h2>
                    <p>{order.order_status}</p>
                </div>
            ))}

        </>
    )
}
