import "./AssetCard.scss";

const AssetCard = ({ name, type, assetId, location, lastMaintenancedate }) => {
  return (
    <div className="asset">
      <div className="asset__left">
        <div className="asset__field">
          <label className="asset__label">NAME:</label>
          <p className="asset__text">{name}</p>
        </div>
        <div className="asset__field-container">
          <div className="asset__field">
            <label className="asset__label">TYPE:</label>
            <p className="asset__text">{type}</p>
          </div>
          <div className="asset__field">
            <label className="asset__label">ASSET ID:</label>
            <p className="asset__text">{assetId}</p>
          </div>
        </div>
      </div>
      <div className="asset__right">
        <div className="asset__field">
          <label className="asset__label">LOCATION:</label>
          <p className="asset__text">{location}</p>
        </div>
        <div className="asset__field">
          <label className="asset__label">LAST MAINTENANCE DATE:</label>
          <p className="asset__text">{lastMaintenancedate}</p>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
