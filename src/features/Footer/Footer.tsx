import "./Footer.css";

import logo from "../../assets/escutcheon_de_chevaliers_de_bon_secours.svg";

function Footer() {
    return (
    <footer className="footer">
        <div className="footer__content">
            <div className="footer__container footer__container_logo">
                <img className="footer__logo" src={logo}/>
                <p className="footer__title">The Knights of Good Help</p>
            </div>
            <div className="footer__container footer__container_links">
                <a href="" className="footer__link">Stars</a>
                <a href="" className="footer__link">Music</a>
                <a href="" className="footer__link">Dance</a>
                <a href="" className="footer__link">Stories</a>
                <a href="" className="footer__link">Fare</a>
                <a href="" className="footer__link">Nature</a>
            </div>
            <p className="footer__copyright">Copyright 2026 Knights of Good Help. All rights reserved.</p>
        </div>
        <div className="footer__container">
            <div className="footer__column">
                <ul>Resources
                    <li>Scripture</li>
                    <li>Genuflection</li>
                    <li>Sacramentals</li>
                    <li>Church Precepts</li>
                    <li>Virtues</li>
                    <li>Saints</li>
                    <li>For the Church Militant</li>
                </ul>
            </div>
            <div className="footer__column">
                <ul>Pages
                    <li>Home</li>
                    <li>Join</li>
                    <li>The Story</li>
                    <li>Sign of the Cross</li>
                    <li>Sacraments</li>
                    <li>Catechism</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </footer>
    )
}

export default Footer;