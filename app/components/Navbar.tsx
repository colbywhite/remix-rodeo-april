import { useReducer } from 'react';
import { Link } from '@remix-run/react';
import { BookOpen, Home } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, toggleMenu] = useReducer((s) => !s, false);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <strong>RR</strong>
                </div>

                <button
                    onClick={toggleMenu}
                    className={`navbar-burger ${isMenuOpen ? 'is-active' : ''}`}
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
                className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}
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
            </div>
        </nav>
    );
}
