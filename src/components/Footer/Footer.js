import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <Link to="/dashboard" className="footer__link"> 
            <h2 className="footer__title">ClearWater</h2>
            </ Link>
            <p className="footer__text">© 2023 ClearWater. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;