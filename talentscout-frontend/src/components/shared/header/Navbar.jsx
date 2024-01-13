export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">TalentScout</a>
            <ul>
                <li>
                   <a href="/Home">Home</a>
                </li>
                <li>
                    <a href="/Explore Players">Explore Players</a>
                </li>
            </ul>
        </nav>
    )
}

