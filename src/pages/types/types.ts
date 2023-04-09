export interface Order {
    order_id: number
    order_time: string
    order_completion_time: string
    order_status: string
}

export interface Props {
    orders: Order[]
}

export interface Item {
    name: string
    reference: string
    company: string
}
