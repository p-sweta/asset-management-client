import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { date } from "../../utils";
import "./UpdateAsset.scss";

const UpdateAsset = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const api_url = "http://localhost:8080";

  const [assetsData, setAssetsData] = useState([]);
  const [currAsset, setCurrAsset] = useState([]);
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

  useEffect(() => {
    const getAssets = async () => {
      try {
        const response = await axios.get(`${api_url}/assets`);
        setAssetsData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAssets();
  }, []);

  useEffect(() => {
    const getAssetByID = async () => {
      try {
        if (id) {
          const response = await axios.get(`${api_url}/assets/${id}`);
          setCurrAsset(response.data);
        }
      } catch (err) {
        console.log(err); 
      }
    };

    getAssetByID();
  }, [id]);

  useEffect(() => {
    if (currAsset) {
      setAssetName(currAsset.assetName);
      setAssetType(currAsset.assetType);
      setAssetId(currAsset.assetId);
      setLocationName(currAsset.locationName);
      setAssetDescription(currAsset.assetDescription);
      setPurchaseDate(currAsset.purchaseDate);
      setManufacturer(currAsset.manufacturer);
      setSerialNumber(currAsset.serialNumber);
      setWarrantyExpirationDate(currAsset.warrantyExpirationDate);
      setMaintenanceInterval(currAsset.maintenanceInterval);
      setLastMaintenanceDate(currAsset.lastMaintenanceDate);
      setNextMaintenanceDate(currAsset.nextMaintenanceDate);
      setStatus(currAsset.status);
    }
  }, [currAsset]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`${api_url}/assets/${id}`, {
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
      })
      .then((res) => {
        alert("Update Successful!!");
        navigate("/assets");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="update">
      <h2 className="update__title">Update Asset Information</h2>
      <form className="update__form" onSubmit={handleOnSubmit}>
        <div className="update__form-container">
          <div className="update__item-details">
            <label htmlFor="assetName" className="update__label">
              Asset Name
            </label>
            <input
              type="text"
              className="update__input"
              id="assetName"
              name="assetName"
              value={assetName}
              onChange={(e) =>
                setAssetName(e.target.value)
              }
            />
            <label htmlFor="assetType" className="update__label">
              Asset Type
            </label>
            <input
              type="text"
              className="update__input"
              id="assetType"
              name="assetType"
              value={assetType}
              onChange={(e) =>
                setAssetType(e.target.value)
              }
            />
            <label htmlFor="assetId" className="update__label">
              Asset ID
            </label>
            <input
              type="text"
              className="update__input"
              id="assetId"
              name="assetId"
              value={assetId}
              onChange={(e) =>
                setAssetId(e.target.value)
              }
            />
            <label htmlFor="assetDescription" className="update__label">
              Asset Description
            </label>
            <textarea
              className="update__input"
              id="assetDescription"
              name="assetDescription"
              value={assetDescription}
              onChange={(e) =>
                setAssetDescription(e.target.value)
              }
            ></textarea>
            <label htmlFor="manufacturer" className="update__label">
              Manufacturer
            </label>
            <input
              type="text"
              className="update__input"
              id="manufacturer"
              name="manufacturer"
              value={manufacturer}
              onChange={(e) =>
                setManufacturer(e.target.value)
              }
            />
            {/* <div className="update__field-container"> */}
            <label htmlFor="serialNumber" className="update__label ">
              Serial Number
              </label>
            <input
              type="text"
              className="update__input"
              id="serialNumber"
              name="serialNumber"
              value={serialNumber}
              onChange={(e) =>
                setSerialNumber(e.target.value)
              }
            />
            <label htmlFor="status" className="update__label update__secondary-label">
              Status</label>
              <label className="update__label">
              <input
                type="checkbox"
                className="update__check"
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
          <div className="update__item-details">
            <label htmlFor="locationName" className="update__label">
              Location Name
            </label>
            <input
              type="text"
              className="update__input"
              id="locationName"
              name="locationName"
              value={locationName}
              onChange={(e) =>
                setLocationName(e.target.value)
              }
            />
            <label htmlFor="lastMaintenanceDate" className="update__label">
              Last Maintenance Date
            </label>
            <input
              type="text"
              className="update__input"
              id="lastMaintenanceDate"
              name="lastMaintenanceDate"
              value={date(lastMaintenanceDate)}
              onChange={(e) =>
                setLastMaintenanceDate(e.target.value
                )
              }
            />
            <label htmlFor="nextMaintenanceDate" className="update__label">
              Next Maintenance Date
            </label>
            <input
              type="text"
              className="update__input"
              id="nextMaintenanceDate"
              name="nextMaintenanceDate"
              value={date(nextMaintenanceDate)}
              onChange={(e) =>
                setNextMaintenanceDate( e.target.value
                )
              }
            />
            <label htmlFor="maintenanceInterval" className="update__label">
              Maintenance Interval
            </label>
            <input
              type="text"
              className="update__input"
              id="maintenanceInterval"
              name="maintenanceInterval"
              value={maintenanceInterval}
              onChange={(e) =>
                setMaintenanceInterval(e.target.value)
              }
            />
            <label htmlFor="purchaseDate" className="update__label">
              Purchase Date
            </label>
            <input
              type="text"
              className="update__input"
              id="purchaseDate"
              name="purchaseDate"
              value={date(purchaseDate)}
              onChange={(e) =>
                setPurchaseDate(e.target.value)
              }
            />
            <label htmlFor="warrantyExpirationDate" className="update__label">
              Warranty Expiration Date
            </label>
            <input
              type="text"
              className="update__input"
              id="warrantyExpirationDate"
              name="warrantyExpirationDate"
              value={date(warrantyExpirationDate)}
              onChange={(e) =>
                setWarrantyExpirationDate(e.target.value)
              }
            />
          </div>
        </div>
        <div className="update__buttons-container">
        <button className="update__button" type="submit">
            Update
          </button>
          <NavLink
            to={`/assets/${id}`}
            className="update__button update__button--cancel update__link"
          >
            Cancel
          </NavLink>
          
        </div>
      </form>
    </div>
  );
};

export default UpdateAsset;
