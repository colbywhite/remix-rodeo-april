import { useReducer } from 'react';
import {
    Link,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from '@remix-run/react';
import { BookOpen, Home } from 'lucide-react';

import './styles.css';
import 'bulma/css/bulma.css';

export function Layout({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, toggleMenu] = useReducer((s) => !s, false);

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
                        <nav
                            className="navbar"
                            role="navigation"
                            aria-label="main navigation"
                        >
                            <div className="navbar-brand">
                                <div className="navbar-item">
                                    <strong>RR</strong>
                                </div>

                                <button
                                    onClick={toggleMenu}
                                    className={`navbar-burger ${
                                        isMenuOpen ? 'is-active' : ''
                                    }`}
                                    aria-label="menu"
                                    aria-expanded={isMenuOpen}
                                    data-target="navbarBasicExample"
                                >
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </button>
                            </div>

                            <div
                                id="navbarBasicExample"
                                className={`navbar-menu ${
                                    isMenuOpen ? 'is-active' : ''
                                }`}
                            >
                                <div className="navbar-start">
                                    <Link className="navbar-item" to="/">
                                        <Home className="mr-2" />
                                        Home
                                    </Link>

                                    <Link className="navbar-item" to="/menu">
                                        <BookOpen className="mr-2" />
                                        Menu
                                    </Link>
                                </div>

                                <div className="navbar-end">
                                    {/* <div className="navbar-item">
                                    <div className="buttons">
                                        <a className="button is-primary">
                                            <strong>Sign up</strong>
                                        </a>
                                        <a className="button is-light">
                                            Log in
                                        </a>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="remix-rodeo-banner">
                        <h1>💿 Remix Rodeo 🤠</h1>
                    </div>
                </header>
                <main className="container">{children}</main>
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
