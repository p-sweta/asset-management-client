import { date } from "../../utils";
import AssetCard from "../AssetCard/AssetCard";
import "./AssetList.scss";

const AssetList = ({ assetsData }) => {
    return (
        <article className="assetlist">
            <h2 className="assetlist__title">ASSETS</h2>
            <ul className="assetlist__asset">
                {assetsData.map((asset) => {
                    return(
                        <li className="assetlist__item" key={asset._id}>
                        <AssetCard 
                        name={ asset.assetName }
                        type={ asset.assetType }
                        assetId={ asset.assetId }
                        location={ asset.locationName }
                        lastMaintenancedate={ date(asset.lastMaintenanceDate) }
                        />
                        </li>
                    )
                    return null;
                })}
            </ul>
        </article>
    ); 
};

export default AssetList;