import { useLoaderData } from '@remix-run/react';
import { ReactNode } from 'react';
import supabase from '~/lib/supabase';
import {DateTime} from "luxon";

export async function loader() {
    const { data: orders, error } = await supabase
        .from('orders')
        .select('*')

    if (error) {
        console.log('Error loading journal entries', error);
    }
    return { orders , tenMinsAgo: DateTime.now().minus({minute: 10}).toISO()};
}

export function Layout({ children }: { children: ReactNode }) {
    return <div>{children}</div>;
}

function getBgColor(oldDate: DateTime, currentDate: DateTime) {
    return oldDate > currentDate ? 'yellow': 'white'
}

export default function ActiveRoute() {
    const { orders, tenMinsAgo: tenMinsAgoString } = useLoaderData<typeof loader>();
    const tenMinsAgo = DateTime.fromISO(tenMinsAgoString)

    return (
        <>
            <div className="content">
                <h1 className="title is-3">Active orders</h1>
            </div>
            <div className="grid">
                {orders.map((order) => (
                    <div className="box cell" style={{'--bulma-box-background-color': getBgColor(tenMinsAgo, DateTime.fromISO(order.orderedAt))}} key={order.id}>
                        <div className="card" style={{'--bulma-card-background-color': getBgColor(tenMinsAgo, DateTime.fromISO(order.orderedAt))}}>
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img
                                        className="rounded"
                                        src={order.item.image}
                                        alt="Yummy food"
                                    />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    {order.item.name} <br/>
                                    <time dateTime={order.orderedAt}>{DateTime.fromISO(order.orderedAt).toLocaleString(DateTime.TIME_SIMPLE)}</time>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
