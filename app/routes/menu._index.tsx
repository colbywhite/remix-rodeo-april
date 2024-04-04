import { ReactNode } from 'react';
import menuItems from '../menu.json';
import { Link, useLoaderData } from '@remix-run/react';
import kebabCase from 'just-kebab-case';

export async function loader() {

    return { menuItems };
}

export function Layout({ children }: { children: ReactNode }) {
    return <div>{children}</div>;
}

export default function MenuRoute() {
    const { menuItems } = useLoaderData<typeof loader>();

    return (
        <>
            <div className="content">
                <h1 className="title is-3">Menu</h1>
            </div>
            <div className="columns is-multiline px-4">
                {menuItems.map((item) => (
                    <Link
                        key={item.id}
                        className="column is-4 mb-5"
                        to={kebabCase(item.name)}
                    >
                        <div className="columns">
                            <div className="column p-0">
                                <figure className="image is-4by3">
                                    <img
                                        className="rounded"
                                        src={item.image}
                                        alt="Yummy food"
                                    />
                                </figure>
                            </div>
                            <div className="column">
                                <p className="title is-4">{item.name}</p>
                                <p>
                                    <strong>
                                        {item.price}
                                        {' // '}
                                        {item.category}
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
