import './navbar.css'

const Navbar = () => {
    return (
        <header>
            <nav className="nav">
                <a className="logo" href="/">Search a <span>Book</span></a>
                <a className="menu-item" href="/about">About</a>
            </nav>
        </header>
    )
}

export default Navbar;