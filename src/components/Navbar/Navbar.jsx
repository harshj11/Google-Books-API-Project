import './navbar.css'

const Navbar = () => {
    return (
        <header>
            <nav className="nav">
                <a className="logo" href="/">Search a Book</a>
                <a className="menu-item" href="/about">About</a>
            </nav>
        </header>
    );
}

export default Navbar;