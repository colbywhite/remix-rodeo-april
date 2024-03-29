import { ReactNode } from 'react';
import menuItems from '../menu.json';
import { useLoaderData } from '@remix-run/react';

export async function clientLoader() {
    return { menuItems };
}

export function Layout({ children }: { children: ReactNode }) {
    return <div>{children}</div>;
}

export default function MenuRoute() {
    const { menuItems } = useLoaderData<typeof clientLoader>();

    return (
        <>
            <div className="menu">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-item">
                        <img src={item.image} alt="Yummy food" />
                        <h4>{item.name}</h4>
                        <p>{item.price}</p>
                        <p>{item.category}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
