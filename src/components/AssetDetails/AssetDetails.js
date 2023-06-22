import "./AssetDetails.scss";

const AssetDetails = ({ currAsset }) => {
    return (
        <div className="assetdetails">
            <div className="assetdetails__left">
          <div className="assetdetails__description">
            <h3 className="assetdetails__label">ITEM DESCRIPTION:</h3>
            <p className="assetdetails__text">{currAsset.assetDescription}</p>
          </div>
          <div className="assetdetails__category">
            <h3 className="assetdetails__label">CATEGORY:</h3>
            <p className="assetdetails__text">{currAsset.assetType}</p>
          </div>
        </div>
            
        </div>
    );
};

export default AssetDetails;