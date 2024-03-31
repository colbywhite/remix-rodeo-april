import { LinkList } from '~/components/LinkList';

export default function Route() {
    return (
        <>
            <main>
                <h3 className="title is-3">Prompt</h3>
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
                    </a>{' '}
                    and{' '}
                    <a href="https://remix.run/docs/en/main/discussion/pending-ui">
                        optimistic UI
                    </a>{' '}
                    to make your app shine!
                </p>
                <h3 className="title is-3">Starting point</h3>
                <p>
                    Use Vite to compile your app. Everything else is up to you.
                </p>
                <h4 className="title is-4">Options</h4>
                <p>
                    This repo (Vite + Remix SPA) has been setup for
                    instructional use but can also be forked and used as a
                    starter for your project.
                </p>
                <LinkList
                    items={[
                        {
                            label: 'Menu JSON',
                            href: 'https://github.com/remix-austin/remix-rodeo-april/blob/main/app/menu.json'
                        },
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
                <h3 className="title is-3">Ideas</h3>
                <ol>
                    <li>Include a marketing landing page</li>
                    <li>Display a menu with all of the orderable items</li>
                    <li>Show a cart experience</li>
                    <li>Create a (fake) checkout experience</li>
                </ol>
                <h3 className="title is-3">Stretch goals</h3>
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
                    <li>Host it! Make it shareable</li>
                </ol>
                <h3 className="title is-3">Example sites</h3>
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
                <h3 className="title is-3">Remix Resources</h3>
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
                <h3 className="title is-3">CSS Resources</h3>
                <LinkList
                    items={[
                        { label: 'Tailwind', href: 'https://tailwindcss.com/' },
                        { label: 'Flowbite', href: 'https://flowbite.com/' },
                        { label: 'Draft UI', href: 'https://draft-ui.com/' },
                        { label: 'shadcn', href: 'https://ui.shadcn.com/' },
                        { label: 'Bulma', href: 'https://bulma.io/' }
                    ]}
                />
                <h3 className="title is-3">React Resources</h3>
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
        </>
    );
}
