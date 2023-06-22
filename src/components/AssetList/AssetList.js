import { date } from "../../utils";
import { NavLink } from "react-router-dom";
import AssetDetails from "../AssetDetails/AssetDetails";
import AssetCard from "../AssetCard/AssetCard";
import "./AssetList.scss";

const AssetList = ({ assetsData, currAsset, setCurrAsset }) => {
  return (
    <article className="assetlist">
      <h2 className="assetlist__title">ASSETS</h2>
      <ul className="assetlist__asset">
        {assetsData.map((asset) => {
          return (
            <>
              <NavLink
                to={`/assets/${currAsset._id}`}
                key={asset._id}
                className="assetlist__link"
              >
                <li
                  className={`assetlist__item ${
                    asset._id === currAsset?._id
                      ? "assetlist__item--selected"
                      : ""
                  }`}
                  onClick={() => setCurrAsset(asset)}
                >
                  <AssetCard
                    name={asset.assetName}
                    type={asset.assetType}
                    assetId={asset.assetId}
                    location={asset.locationName}
                    lastMaintenancedate={date(asset.lastMaintenanceDate)}
                  />
                </li>
              </NavLink>

              {asset._id === currAsset?._id && (
                <div
                  className={`assetlist__details ${
                    !currAsset._id ? "assetlist__details--not-selected" : ""
                  }`}
                >
                  <AssetDetails currAsset={currAsset} />
                </div>
              )}
            </>
          );
          //   return null;
        })}
      </ul>
    </article>
  );
};

export default AssetList;
