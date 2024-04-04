import { useLoaderData } from '@remix-run/react';
import { ReactNode } from 'react';
import supabase from '~/lib/supabase';

export async function loader() {
    // fetch from /orders route, not supabase
    // const response = await fetch('/orders');
    // console.log('response :>> ', response);

    const { data: orders, error } = await supabase
        .from('orders')
        .select('*')


    if (error) {
        console.log('Error loading journal entries', error);
    }
    return { orders: orders || [] };
    // return { orders: orders || [] };
}

export function Layout({ children }: { children: ReactNode }) {
    return <div>{children}</div>;
}

export default function ActiveRoute() {
    const { orders } = useLoaderData<typeof loader>();

    return (
        <>
            <div className="content">
                <h1 className="title is-3">Active orders</h1>
            </div>
            <div className="columns is-multiline px-4">
                {orders.map((order) => (
                    <div className="columns" key={order.id}>
                        <div className="column p-0">
                            <figure className="image is-4by3">
                                <img
                                    className="rounded"
                                    src={order.item.image}
                                    alt="Yummy food"
                                />
                            </figure>
                        </div>
                        <div className="column">
                            <p className="title is-4">{order.item.name}</p>
                            <p>
                                <strong>
                                    {order.orderedAt}
                                    {' // '}
                                    {order.isDone}
                                </strong>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
