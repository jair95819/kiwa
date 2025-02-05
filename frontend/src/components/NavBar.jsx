import logo_kiwa from '../assets/images/logo_kiwa.png';

export function NavBar() {
    return (
        <nav className="kw-navBar">
            <img className="kw-navBar-logo" src={logo_kiwa} alt="logo"/>

            <ul>
                <li><a href="/">Promos</a></li>
                <li><a href="/carta">Carta</a></li>
            </ul>
        </nav>
    )
}