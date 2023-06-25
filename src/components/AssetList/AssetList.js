import { date } from "../../utils";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import AssetDetails from "../AssetDetails/AssetDetails";
import AssetCard from "../AssetCard/AssetCard";
import SortButton from "../SortButton/SortButton";
import "./AssetList.scss";

const AssetList = ({ assetsData, currAsset, setCurrAsset }) => {
  const [selectedAssetId, setSelectedAssetId] = useState(null);
  const [sortedData, setSortedData] = useState(assetsData);
  const [sortOption, setSortOption] = useState("");

  const handleAssetClick = (assetId) => {
    setSelectedAssetId(assetId);
  };

  useEffect(() => {
    setSortedData(assetsData);
  }, [assetsData]);

  const handleOnSort = (option) => {
    let sortedAssets = [];

    switch (option) {
      case "Name":
        sortedAssets = [...assetsData].sort((a, b) =>
          a.assetName.localeCompare(b.assetName)
        );
        break;
        case "Type":
        sortedAssets = [...assetsData].sort((a, b) =>
          a.assetType.localeCompare(b.assetType)
        );
        break;
      case "Asset ID":
        sortedAssets = [...assetsData].sort((a, b) =>
          a.assetId.localeCompare(b.assetId)
        );
        break;
        case "Location":
        sortedAssets = [...assetsData].sort((a, b) =>
          a.locationName.localeCompare(b.locationName)
        );
        break;
      case "Last Maintenance Date":
        sortedAssets = [...assetsData].sort((a, b) =>
          date(a.lastMaintenanceDate).localeCompare(date(b.lastMaintenanceDate))
        );
        break;
      // Add more cases for additional sorting options
      default:
        sortedAssets = [...assetsData];
        break;
    }

    setSortedData(sortedAssets);
    setSortOption(option);
  };

  return (
    <article className="assetlist">
      <div className="assetlist__title-container">
      <h2 className="assetlist__title">ASSETS</h2>
      <SortButton onSort={handleOnSort} />
      </div>
      <ul className="assetlist__asset">
        {sortedData.map((asset) => {
          return (
              <li
                key={asset._id}
                className={`assetlist__item ${
                  asset._id === selectedAssetId
                    ? "assetlist__item--selected"
                    : ""
                }`}
                onClick={() => handleAssetClick(asset._id)}
              >
                <NavLink
                  to={`/assets/${asset._id}`}
                  className="assetlist__link"
                  activeclassname="active"
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
          );
        })}
      </ul>
    </article>
  );
};

export default AssetList;
