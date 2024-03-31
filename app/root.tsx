import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from '@remix-run/react';

import './styles.css';
import 'bulma/css/bulma.css';
import Navbar from './components/Navbar';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" type="image/svg+xml" href="favicon.svg" />
                <Meta />
                <Links />
            </head>
            <body>
                <header className="mb-4">
                    <div className="container">
                        <Navbar />
                    </div>
                    <div className="remix-rodeo-banner">
                        <h1>💿 Remix Rodeo 🤠</h1>
                    </div>
                </header>
                <main className="container px-3 pb-6">{children}</main>
                <footer className="footer">
                    <div className="container">
                        <div className="px-3">
                            Styled with <a href="https://bulma.io/">Bulma</a>
                        </div>
                    </div>
                </footer>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function HydrateFallback() {
    return <p>Loading...</p>;
}
