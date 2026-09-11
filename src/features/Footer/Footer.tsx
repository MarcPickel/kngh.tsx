import "./Footer.css";

import logo from "../../assets/escutcheon_de_chevaliers_de_bon_secours.svg";

function Footer() {
    return (
    <footer className="footer">
        <div className="footer__content">
            <div className="footer__container footer__container-logo">
                <img className="footer__logo" src={logo}/>
                <p className="footer__title">The Knights of Good Help</p>
            </div>
            <div className="footer__container footer__container-links">
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
                <p className="footer__list-title">Resources</p>
                <ul className="footer__list">
                    <li className="footer__list-item">Scripture</li>
                    <li className="footer__list-item">Genuflection</li>
                    <li className="footer__list-item">Sacramentals</li>
                    <li className="footer__list-item">Church Precepts</li>
                    <li className="footer__list-item">Virtues</li>
                    <li className="footer__list-item">Saints</li>
                    <li className="footer__list-item">Helpful Links</li>
                </ul>
            </div>
            <div className="footer__column">
            <p className="footer__list-title">Pages</p>
                <ul className="footer__list">
                    <li className="footer__list-item">Home</li>
                    <li className="footer__list-item">Join</li>
                    <li className="footer__list-item">The Story</li>
                    <li className="footer__list-item">Sign of the Cross</li>
                    <li className="footer__list-item">Sacraments</li>
                    <li className="footer__list-item">Catechism</li>
                    <li className="footer__list-item">About</li>
                    <li className="footer__list-item">Contact</li>
                </ul>
            </div>
        </div>
    </footer>
    )
}

export default Footer;