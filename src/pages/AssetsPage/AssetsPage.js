import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AssetList from "../../components/AssetList/AssetList";
import "./AssetsPage.scss";

const AssetsPage = () => {
  const { id } = useParams();
  const [assetsData, setAssetsData] = useState([]);
  const [currAsset, setCurrAsset] = useState();
  const api_url = "http://localhost:8080";

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

  console.log(assetsData);

  return (
    <div>
      <AssetList assetsData={assetsData} />
    </div>
  );
};

export default AssetsPage;
