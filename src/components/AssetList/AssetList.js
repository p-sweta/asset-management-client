import { date } from "../../utils";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import AssetDetails from "../AssetDetails/AssetDetails";
import AssetCard from "../AssetCard/AssetCard";
import "./AssetList.scss";

const AssetList = ({ assetsData, currAsset, setCurrAsset }) => {
    const [selectedAssetId, setSelectedAssetId] = useState(null);

  const handleAssetClick = (assetId) => {
    setSelectedAssetId(assetId);
  };

  return (
    <article className="assetlist">
      <h2 className="assetlist__title">ASSETS</h2>
      <ul className="assetlist__asset">
        {assetsData.map((asset) => {
          return (
            <>
              
                <li
                  className={`assetlist__item ${
                    asset._id === selectedAssetId
                      ? "assetlist__item--selected"
                      : ""
                  }`}
                  onClick={() => handleAssetClick(asset._id)}
                >
                    <NavLink
                to={`/assets/${asset._id}`}
                key={asset._id}
                className="assetlist__link"
                activeClassName="active"
              >
                  <AssetCard
                    name={asset.assetName}
                    type={asset.assetType}
                    assetId={asset.assetId}
                    location={asset.locationName}
                    lastMaintenancedate={date(asset.lastMaintenanceDate)}
                  />
               
              
                </NavLink>
              {asset._id === selectedAssetId && (
                <div
                  className={`assetlist__details ${
                    !selectedAssetId ? "assetlist__details--not-selected" : ""
                  }`}
                >
                  <AssetDetails currAsset={asset} />
                </div>
              )}
               </li>
            </>
          );
        })}
      </ul>
    </article>
  );
};

export default AssetList;
