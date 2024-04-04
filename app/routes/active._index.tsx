import { ReactNode } from 'react';
import orders from '../orders.json';
import { Link, useLoaderData } from '@remix-run/react';
import kebabCase from 'just-kebab-case';

export async function clientLoader() {
    return { orders };
}

export function Layout({ children }: { children: ReactNode }) {
    return <div>{children}</div>;
}

export default function ActiveRoute() {
    const { orders } = useLoaderData<typeof clientLoader>();

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
