import type { MetaFunction } from '@remix-run/node';
import { LinkList } from '../components/LinkList';

export const meta: MetaFunction = () => {
    return [
        { title: 'Remix Rodeo' },
        { name: 'description', content: 'Welcome to Remix Rodeo!' }
    ];
};

export default function Index() {
    return (
        <div className="wrapper">
            <header>
                <h1>Remix Rodeo 🤠</h1>
            </header>
            <main>
                <h2>Prompt</h2>
                <p>Build a restaurant ordering app.</p>
                <p>
                    Choose your favorite restaurant. Make up your own
                    restaurant! Try to build out as complete of a site as
                    possible.
                </p>
                <p>
                    Leverage core concepts in Remix like{' '}
                    <a href="https://remix.run/docs/en/main/file-conventions/routes">
                        nested routes
                    </a>
                    ,{' '}
                    <a href="https://remix.run/docs/en/main/discussion/progressive-enhancement">
                        progressive enhancement
                    </a>
                    ,{' '}
                    <a href="https://remix.run/docs/en/main/discussion/pending-ui">
                        optimistic UI
                    </a>{' '}
                    and{' '}
                    <a href="https://remix.run/docs/en/main/discussion/progressive-enhancement">
                        progressive enhancement
                    </a>{' '}
                    to make your app shine!
                </p>
                <h2>Provided</h2>
                <LinkList
                    items={[
                        {
                            label: 'Menu route',
                            href: 'https://github.com/remix-austin/remix-rodeo-april/blob/main/app/routes/menu.tsx'
                        },
                        {
                            label: 'Menu generator script',
                            href: 'https://github.com/remix-austin/remix-rodeo-april/blob/main/generate-menu.js'
                        }
                    ]}
                />
                <h2>Acceptance Criteria</h2>
                <ol>
                    <li>
                        <strong>Must have</strong> a marketing landing page
                    </li>
                    <li>
                        <strong>Must have</strong> a menu with all of the
                        orderable items
                    </li>
                    <li>
                        <strong>Must have</strong> a cart experience
                    </li>
                    <li>
                        <strong>Must have</strong> a (fake) checkout experience
                    </li>
                    <li>
                        <strong>Must be</strong> hosted and shareable
                    </li>
                </ol>
                <h3>Stretch goals</h3>
                <ol>
                    <li>Add a database</li>
                    <li>
                        Create a logged in ordering experience
                        <ul>
                            <li>Account</li>
                            <li>Favorites</li>
                            <li>Recent orders</li>
                            <li>Payment methods</li>
                        </ul>
                    </li>
                </ol>
                <h3>Example sites</h3>
                <LinkList
                    items={[
                        {
                            label: 'Via 313',
                            href: 'https://order.via313.com/locations/cedarparktx/menu'
                        },
                        {
                            label: `Torchy's Tacos`,
                            href: 'https://ordering.torchys.com/online/order/menu'
                        },
                        {
                            label: `Stiles Switch BBQ`,
                            href: 'https://order.toasttab.com/online/stiles-switch-bbq-cedar-park'
                        }
                    ]}
                />
            </main>
            <aside>
                <h2>Remix Resources</h2>
                <LinkList
                    items={[
                        {
                            label: 'SPA Mode Guide',
                            href: 'https://remix.run/future/spa-mode'
                        },
                        { label: 'Remix Docs', href: 'https://remix.run/docs' },
                        {
                            label: 'Remix Youtube Playlists',
                            href: 'https://www.youtube.com/@Remix-Run/playlists'
                        }
                    ]}
                />
                <h2>CSS Resources</h2>
                <LinkList
                    items={[
                        { label: 'Tailwind', href: 'https://tailwindcss.com/' },
                        { label: 'Flowbite', href: 'https://flowbite.com/' },
                        { label: 'Draft UI', href: 'https://draft-ui.com/' },
                        { label: 'shadcn', href: 'https://ui.shadcn.com/' },
                        { label: 'Bulma', href: 'https://bulma.io/' }
                    ]}
                />
                <h2>React Resources</h2>
                <LinkList
                    items={[
                        {
                            label: 'Awesome React',
                            href: 'https://github.com/enaqx/awesome-react?tab=readme-ov-file#awesome-react-'
                        },
                        {
                            label: 'Awesome React Components',
                            href: 'https://github.com/brillout/awesome-react-components'
                        }
                    ]}
                />
            </aside>
        </div>
    );
}
