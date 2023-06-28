import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        {/* <img className="header__logo" src={logo} alt="water logo" /> */}
        <Link to="/dashboard" className="header__link">
          <h1 className="header__title">ClearWater</h1>
        </Link>
      </div>

      {/* <SearchBar /> */}
    </div>
  );
};

export default Header;
