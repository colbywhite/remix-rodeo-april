import { ActionFunctionArgs, LoaderFunctionArgs, json } from '@remix-run/node';

import { Form, Link, useActionData, useLoaderData } from '@remix-run/react';
import kebabCase from 'just-kebab-case';
import { ArrowBigLeft } from 'lucide-react';
import menuItems from '../menu.json';
import supabase from '~/lib/supabase';

export async function clientLoader({ params }: LoaderFunctionArgs) {
    const [item] = menuItems.filter(
        (i) => kebabCase(i.name) === params.itemName
    );

    return { item };
}

export default function MenuItemRoute() {
    const { item } = useLoaderData<typeof clientLoader>();
    const actionData = useActionData<typeof action>();

    return (
        <Form method='post'>
            <input type="hidden" name="itemId" value={item.id} />
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
                    <button type="submit" className="button is-primary">Add to cart</button>
                </div>
                {actionData && <p>{actionData.message}</p>}
            </div>
        </Form>
    );
}

export async function action({
    request,
}: ActionFunctionArgs) {
    const formData = await request.formData();
    const itemId = formData.get('itemId');
    const item = menuItems.find((i) => i.id === itemId);
    console.log('item :>> ', item);

    const newOrder = {
        item,
        orderedAt: new Date().toISOString(),
        isDone: false,
        id: 6
    };

    // Save the order to the database
    const res = await supabase.from('orders').insert(newOrder);
    console.log('res :>> ', res);
    return json({ message: 'success' })
}