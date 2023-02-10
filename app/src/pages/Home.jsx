import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/cat"
                exact
            >
                Cat
            </Link>

            <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/morty"
                exact
            >
                Morty
            </Link>

            <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/horizontal-sections"
                exact
            >
                Horizontal Sections
            </Link>
        </div>
    )
}

export default Home