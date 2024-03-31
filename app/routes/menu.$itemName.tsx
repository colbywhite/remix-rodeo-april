import { LoaderFunctionArgs } from '@remix-run/node';

import menuItems from '../menu.json';
import { Link, useLoaderData } from '@remix-run/react';
import kebabCase from 'just-kebab-case';
import { ArrowBigLeft } from 'lucide-react';

export async function clientLoader({ params }: LoaderFunctionArgs) {
    const [item] = menuItems.filter(
        (i) => kebabCase(i.name) === params.itemName
    );

    return { item };
}

export default function MenuItemRoute() {
    const { item } = useLoaderData<typeof clientLoader>();

    return (
        <>
            <div>
                <h1 className="title is-3">Details</h1>
                <Link className="button is-outline mb-4" to="/menu">
                    <ArrowBigLeft className="mr-2" /> Back to menu
                </Link>
            </div>
            <div className="columns">
                <div className="column">
                    <figure className="image">
                        <img src={item.image} alt={item.name} />
                    </figure>
                </div>
                <div className="column">
                    <h2 className="title is-2">{item.name}</h2>
                    <p className="is-size-4">{item.category}</p>
                    <p className="is-size-4 mb-4">{item.price}</p>
                    <button className="button is-primary">Add to cart</button>
                </div>
            </div>
        </>
    );
}
