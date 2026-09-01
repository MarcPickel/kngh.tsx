import "./Header.css";
import {NavLink} from "react-router-dom";

import Nav from "../Nav/Nav.tsx";

import logo from "../../assets/escutcheon_de_chevaliers_de_bon_secours.svg";

function Header() {
 return (
    <header className="header">
        <NavLink to="/home">
        <div className="header__container">
            <img className="header__logo" src={logo} />
            <p className="header__title">The Knights of Good Help</p>
        </div>
        </NavLink>
        <Nav />
    </header>
 )
}

export default Header;