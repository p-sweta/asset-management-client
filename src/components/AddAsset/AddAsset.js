import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { date } from "../../utils";
import "./AddAsset.scss";

const AddAsset = () => {
  const navigate = useNavigate();
  const api_url = "http://localhost:8080";
  const [failedAuth, setFailedAuth] = useState(false);
  const [assetName, setAssetName] = useState("Pump C");
  const [assetType, setAssetType] = useState("Pump");
  const [assetId, setAssetId] = useState("P-25");
  const [locationName, setLocationName] = useState("Pump Station 1");
  const [assetDescription, setAssetDescription] = useState(
    "Centrifugal pump for water supply"
  );
  const [purchaseDate, setPurchaseDate] = useState("01/01/2020");
  const [manufacturer, setManufacturer] = useState("Grundfos");
  const [serialNumber, setSerialNumber] = useState("PUMP005");
  const [warrantyExpirationDate, setWarrantyExpirationDate] =
    useState("01/01/2025");
  const [maintenanceInterval, setMaintenanceInterval] = useState("Monthly");
  const [lastMaintenanceDate, setLastMaintenanceDate] = useState("01/05/2022");
  const [nextMaintenanceDate, setNextMaintenanceDate] = useState("02/05/2022");
  const [status, setStatus] = useState(false);

  const handleStatusValue = () => {
    setStatus(!status);
  };

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
          status: status ? "Active" : "Inactive",
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
              // placeholder="Asset Name"
              value={assetName}
              onChange={(e) => setAssetName(e.target.value)}
              required
            />
            <label htmlFor="assetType" className="add__label">
              Asset Type
            </label>
            <input
              type="text"
              className="add__input"
              id="assetType"
              name="assetType"
              // placeholder="Asset Type"
              value={assetType}
              onChange={(e) => setAssetType(e.target.value)}
              required
            />
            <label htmlFor="assetId" className="add__label">
              Asset ID
            </label>
            <input
              type="text"
              className="add__input"
              id="assetId"
              name="assetId"
              // placeholder="Asset ID"
              value={assetId}
              onChange={(e) => setAssetId(e.target.value)}
              required
            />
            <label htmlFor="assetDescription" className="add__label">
              Asset Description
            </label>
            <textarea
              className="add__input add__textarea"
              id="assetDescription"
              name="assetDescription"
              // placeholder="Asset Description"
              value={assetDescription}
              onChange={(e) => setAssetDescription(e.target.value)}
              required
            ></textarea>
            <label htmlFor="manufacturer" className="add__label">
              Manufacturer
            </label>
            <input
              type="text"
              className="add__input"
              id="manufacturer"
              name="manufacturer"
              // placeholder="Manufacturer"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              required
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
              // placeholder="Serial Number"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
              required
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
                checked={status}
                onChange={handleStatusValue}
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
              // placeholder="Location Name"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              required
            />
            <label htmlFor="lastMaintenanceDate" className="add__label">
              Last Maintenance Date
            </label>
            <input
              type="text"
              className="add__input"
              id="lastMaintenanceDate"
              name="lastMaintenanceDate"
              // placeholder="MM/DD/YYYY"
              value={lastMaintenanceDate}
              onChange={(e) => setLastMaintenanceDate(e.target.value)}
              required
            />
            <label htmlFor="nextMaintenanceDate" className="add__label">
              Next Maintenance Date
            </label>
            <input
              type="text"
              className="add__input"
              id="nextMaintenanceDate"
              name="nextMaintenanceDate"
              // placeholder="MM/DD/YYYY"
              value={nextMaintenanceDate}
              onChange={(e) => setNextMaintenanceDate(e.target.value)}
              required
            />
            <label htmlFor="maintenanceInterval" className="add__label">
              Maintenance Interval
            </label>
            <input
              type="text"
              className="add__input"
              id="maintenanceInterval"
              name="maintenanceInterval"
              // placeholder="Maintenance Interval"
              value={maintenanceInterval}
              onChange={(e) => setMaintenanceInterval(e.target.value)}
              required
            />
            <label htmlFor="purchaseDate" className="add__label">
              Purchase Date
            </label>
            <input
              type="text"
              className="add__input"
              id="purchaseDate"
              name="purchaseDate"
              // placeholder="MM/DD/YYYY"
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
              required
            />
            <label htmlFor="warrantyExpirationDate" className="add__label">
              Warranty Expiration Date
            </label>
            <input
              type="text"
              className="add__input"
              id="warrantyExpirationDate"
              name="warrantyExpirationDate"
              // placeholder="MM/DD/YYYY"
              value={warrantyExpirationDate}
              onChange={(e) => setWarrantyExpirationDate(e.target.value)}
              required
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
