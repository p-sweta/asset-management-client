import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { date } from "../../utils";
import "./AddAsset.scss";

const AddAsset = () => {
  const navigate = useNavigate();
  const api_url = "http://localhost:8080";

  const [assetName, setAssetName] = useState("");
  const [assetType, setAssetType] = useState("");
  const [assetId, setAssetId] = useState("");
  const [locationName, setLocationName] = useState("");
  const [assetDescription, setAssetDescription] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [warrantyExpirationDate, setWarrantyExpirationDate] = useState("");
  const [maintenanceInterval, setMaintenanceInterval] = useState("");
  const [lastMaintenanceDate, setLastMaintenanceDate] = useState("");
  const [nextMaintenanceDate, setNextMaintenanceDate] = useState("");
  const [status, setStatus] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const createAsset = async () => {
      try {
        axios.post(`${api_url}/assets`, {
          assetName: assetName,
          assetType: assetType,
          assetId: assetId,
          locationName: locationName,
          assetDescription: assetDescription,
          purchaseDate: purchaseDate,
          manufacturer: manufacturer,
          serialNumber: serialNumber,
          warrantyExpirationDate: warrantyExpirationDate,
          maintenanceInterval: maintenanceInterval,
          lastMaintenanceDate: lastMaintenanceDate,
          nextMaintenanceDate: nextMaintenanceDate,
          status: status,
        });
        alert("Asset created!!");
        navigate("/assets");
      } catch (err) {
        console.log(err);
      }
    };
    createAsset();
  };

  return (
    <div className="add">
      <h2 className="add__title">Add a New Asset</h2>
      <form className="add__form" onSubmit={handleOnSubmit}>
        <div className="add__form-container">
          <div className="add__item-details">
            <label htmlFor="assetName" className="add__label">
              Asset Name
            </label>
            <input
              type="text"
              className="add__input"
              id="assetName"
              name="assetName"
              placeholder="Asset Name"
              onChange={(e) => setAssetName(e.target.value)}
            />
            <label htmlFor="assetType" className="add__label">
              Asset Type
            </label>
            <input
              type="text"
              className="add__input"
              id="assetType"
              name="assetType"
              placeholder="Asset Type"
              onChange={(e) => setAssetType(e.target.value)}
            />
            <label htmlFor="assetId" className="add__label">
              Asset ID
            </label>
            <input
              type="text"
              className="add__input"
              id="assetId"
              name="assetId"
              placeholder="Asset ID"
              onChange={(e) => setAssetId(e.target.value)}
            />
            <label htmlFor="assetDescription" className="add__label">
              Asset Description
            </label>
            <textarea
              className="add__input"
              id="assetDescription"
              name="assetDescription"
              placeholder="Asset Description"
              onChange={(e) => setAssetDescription(e.target.value)}
            ></textarea>
            <label htmlFor="manufacturer" className="add__label">
              Manufacturer
            </label>
            <input
              type="text"
              className="add__input"
              id="manufacturer"
              name="manufacturer"
              placeholder="Manufacturer"
              onChange={(e) => setManufacturer(e.target.value)}
            />
            {/* <div className="add__field-container"> */}
            <label htmlFor="serialNumber" className="add__label ">
              Serial Number
            </label>
            <input
              type="text"
              className="add__input"
              id="serialNumber"
              name="serialNumber"
              placeholder="Serial Number"
              onChange={(e) => setSerialNumber(e.target.value)}
            />
            <label htmlFor="status" className="add__label add__secondary-label">
              Status
            </label>
            <label className="add__label">
              <input
                type="checkbox"
                className="add__check"
                id="status"
                name="status"
                checked={status === "Active"}
                onChange={(e) => {
                  setStatus(e.target.checked ? "Active" : "Inactive");
                }}
              />
              Active
            </label>
            {/* </div> */}
          </div>
          <div className="add__item-details">
            <label htmlFor="locationName" className="add__label">
              Location Name
            </label>
            <input
              type="text"
              className="add__input"
              id="locationName"
              name="locationName"
              placeholder="Location Name"
              onChange={(e) => setLocationName(e.target.value)}
            />
            <label htmlFor="lastMaintenanceDate" className="add__label">
              Last Maintenance Date
            </label>
            <input
              type="text"
              className="add__input"
              id="lastMaintenanceDate"
              name="lastMaintenanceDate"
              placeholder="MM/DD/YYYY"
              onChange={(e) => setLastMaintenanceDate(e.target.value)}
            />
            <label htmlFor="nextMaintenanceDate" className="add__label">
              Next Maintenance Date
            </label>
            <input
              type="text"
              className="add__input"
              id="nextMaintenanceDate"
              name="nextMaintenanceDate"
              placeholder="MM/DD/YYYY"
              onChange={(e) => setNextMaintenanceDate(e.target.value)}
            />
            <label htmlFor="maintenanceInterval" className="add__label">
              Maintenance Interval
            </label>
            <input
              type="text"
              className="add__input"
              id="maintenanceInterval"
              name="maintenanceInterval"
              placeholder="Maintenance Interval"
              onChange={(e) => setMaintenanceInterval(e.target.value)}
            />
            <label htmlFor="purchaseDate" className="add__label">
              Purchase Date
            </label>
            <input
              type="text"
              className="add__input"
              id="purchaseDate"
              name="purchaseDate"
              placeholder="MM/DD/YYYY"
              onChange={(e) => setPurchaseDate(e.target.value)}
            />
            <label htmlFor="warrantyExpirationDate" className="add__label">
              Warranty Expiration Date
            </label>
            <input
              type="text"
              className="add__input"
              id="warrantyExpirationDate"
              name="warrantyExpirationDate"
              placeholder="MM/DD/YYYY"
              onChange={(e) => setWarrantyExpirationDate(e.target.value)}
            />
          </div>
        </div>
        <div className="add__buttons-container">
          <button className="add__button" type="submit">
            Create
          </button>
          <NavLink
            to={`/assets`}
            className="add__button add__button--cancel add__link"
          >
            Cancel
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default AddAsset;
