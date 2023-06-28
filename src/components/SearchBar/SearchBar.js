import search from "../../assets/search.svg";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search.." className="search__input" />
      <img src={search} alt="search image" className="search__img" />
    </div>
  );
};

export default SearchBar;
