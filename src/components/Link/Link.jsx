import './link.css'

const Link = ({ className, href, children }) => {

    const onClick = (event) => {
        //Preventing full page reload
        event.preventDefault();
        //Update URL
        window.history.pushState({}, "", href)
    }

    return (
        <a className={className} href={href} onClick={onClick}>
            {children}
        </a>
    )
}

export default Link;