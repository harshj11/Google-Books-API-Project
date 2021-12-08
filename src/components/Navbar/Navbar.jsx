import './navbar.css'
import '../Link/Link'
import Link from '../Link/Link';

const Navbar = () => {
    return (
        <header>
            <nav className="nav">
                <Link href="/" className="logo">
                    Search a Book
                </Link>
                <Link href="/about" className="menu-item">
                    About
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;