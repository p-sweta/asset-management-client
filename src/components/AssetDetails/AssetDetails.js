import { date } from "../../utils";
import { Link } from "react-router-dom";
import "./AssetDetails.scss";

const AssetDetails = ({ currAsset }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    window.location.href = "/assets";
  };

  return (
    <div className="assetdetails">
      <div className="assetdetails__container">
      <div className="assetdetails__left">
        <div className="assetdetails__field">
          <label className="asset__label">ITEM DESCRIPTION:</label>
          <p className="assetdetails__text">{currAsset.assetDescription}</p>
        </div>
        <div className="assetdetails__field">
          <label className="asset__label">MANUFACTURER:</label>
          <p className="assetdetails__text">{currAsset.manufacturer}</p>
        </div>
        <div className="assetdetails__field">
          <label className="asset__label">SERIAL #:</label>
          <p className="assetdetails__text">{currAsset.serialNumber}</p>
        </div>
        <div className="assetdetails__field">
          <label className="asset__label">STATUS:</label>
          <p className="assetdetails__text">{currAsset.status}</p>
        </div>
      </div>
      <div className="assetdetails__right">
        <div className="assetdetails__field">
          <label className="asset__label">NEXT MAINTENANCE DATE:</label>
          <p className="assetdetails__text">
            {date(currAsset.nextMaintenanceDate)}
          </p>
        </div>
        <div className="assetdetails__field">
          <label className="asset__label">MAINTENANCE INTERVAL:</label>
          <p className="assetdetails__text">{currAsset.maintenanceInterval}</p>
        </div>
        <div className="assetdetails__field">
          <label className="asset__label">PURCHASE DATE:</label>
          <p className="assetdetails__text">{date(currAsset.purchaseDate)}</p>
        </div>
        <div className="assetdetails__field">
          <label className="asset__label">WARRANTY EXPIRATION:</label>
          <p className="assetdetails__text">
            {date(currAsset.warrantyExpirationDate)}
          </p>
        </div>
      </div>
      </div>
      <div className="assetdetails__buttons">
        <Link
          to={"/assets"}
          className="assetdetails__link"
          onClick={handleOnClick}
        >
          <button className="assetdetails__button">CLOSE</button>
        </Link>

        <Link
          to={`/assets/edit/${currAsset._id}`}
          className="assetdetails__link"
        >
          <button className="assetdetails__button">UPDATE</button>
        </Link>
      </div>
    </div>
  );
};

export default AssetDetails;
