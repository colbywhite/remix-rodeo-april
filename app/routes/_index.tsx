import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
    return [
        { title: 'Remix Rodeo' },
        { name: 'description', content: 'Welcome to Remix Rodeo!' }
    ];
};

export default function Index() {
    return (
        <div
            style={{
                fontFamily: 'system-ui, sans-serif',
                lineHeight: '1.8',
                padding: '1rem 2rem'
            }}
        >
            <h1>Remix Rodeo 🤠</h1>
            <h2>Prompt</h2>
            <p>Build a restaurant ordering app.</p>
            <h3>Examples</h3>
            <ul>
                <li>
                    <a href="https://order.via313.com/locations/cedarparktx/menu">
                        Via 313
                    </a>
                </li>
                <li>
                    <a href="https://ordering.torchys.com/online/order/menu">
                        Torchy's Tacos
                    </a>
                </li>
                <li>
                    <a href="https://order.toasttab.com/online/stiles-switch-bbq-cedar-park">
                        Stiles Switch BBQ
                    </a>
                </li>
            </ul>
            <h2>Acceptance Criteria</h2>
            <ol>
                <li>
                    <strong>Must have</strong> a marketing landing page
                </li>
                <li>
                    <strong>Must have</strong> a menu with all of the orderable
                    items
                </li>
                <li>
                    <strong>Must have</strong> a cart experience
                </li>
                <li>
                    <strong>Must have</strong> a (fake) checkout experience
                </li>
            </ol>
            <h3>Stretch goals</h3>
            <ol>
                <li>
                    Logged-in ordering experience
                    <ul>
                        <li>Favorites</li>
                        <li>Recent orders</li>
                        <li>Payment methods</li>
                    </ul>
                </li>
            </ol>
            <h2>Resources</h2>
            <ul>
                <li>
                    <a
                        target="_blank"
                        href="https://remix.run/future/spa-mode"
                        rel="noreferrer"
                    >
                        SPA Mode Guide
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://remix.run/docs"
                        rel="noreferrer"
                    >
                        Remix Docs
                    </a>
                </li>
            </ul>
        </div>
    );
}
