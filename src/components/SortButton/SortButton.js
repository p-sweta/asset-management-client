import { useState } from "react";
import "./SortButton.scss";

const SortButton = ({ onSort }) => {
  const [selection, setselection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleOnSelect = (option) => {
    setselection(option);
    onSort(option);
    setIsOpen(false);
  };

  return (
    <div className="sort">
      <button className="sort__toggle" onClick={() => setIsOpen(!isOpen)}>
        Sort By: {selection || "Select an Option"}
      </button>
      {isOpen && (
        <ul className="sort__menu">
          <li className="sort__option" onClick={() => handleOnSelect("Name")}>
            Asset Name
          </li>
          <li className="sort__option" onClick={() => handleOnSelect("Type")}>
            Asset Type
          </li>
          <li
            className="sort__option"
            onClick={() => handleOnSelect("Asset ID")}
          >
            Asset ID
          </li>
          <li
            className="sort__option"
            onClick={() => handleOnSelect("Location")}
          >
            Location
          </li>
          <li
            className="sort__option"
            onClick={() => handleOnSelect("Last Maintenance Date")}
          >
            Last Maintenance Date
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortButton;
