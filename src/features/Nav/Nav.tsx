import "./Nav.css";

import {NavLink} from "react-router-dom";

function Nav() {
    return (
    <nav className="nav">
        <NavLink to="/">
        <button className="nav__button" type="button">Home</button>
        </NavLink>
        <NavLink to="/join">
        <button className="nav__button" type="button">Join</button>
        </NavLink>
        <NavLink to="/cross">
        <button className="nav__button" type="button">Sign of the Cross</button>
        </NavLink>
        <NavLink to="/genuflect">
        <button className="nav__button" type="button">Genuflection</button>
        </NavLink>
        <NavLink to="/sacraments">
        <button className="nav__button" type="button">Sacraments</button>
        </NavLink>
        <NavLink to="/catechism">
        <button className="nav__button" type="button">Catechism</button>
        </NavLink>
        <NavLink to="/scripture">
        <button className="nav__button" type="button">Scripture</button>
        </NavLink>
        <NavLink to="/about">
        <button className="nav__button" type="button">About</button>
        </NavLink>
        <NavLink to="/contact">
        <button className="nav__button" type="button">Contact</button>
        </NavLink>
    </nav>
    )
}

export default Nav;