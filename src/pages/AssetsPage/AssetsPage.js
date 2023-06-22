import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AssetList from "../../components/AssetList/AssetList";
import AssetDetails from "../../components/AssetDetails/AssetDetails";
import "./AssetsPage.scss";

const AssetsPage = () => {
  const { id } = useParams();
  const [assetsData, setAssetsData] = useState([]);
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
  //   console.log(assetsData);

  const [currAsset, setCurrAsset] = useState([]);

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

  if (!currAsset) {
    return <p>Loading...</p>;
  }

  //   console.log(assetsData);
  //   console.log(currAsset);

  return (
    <div>
      <AssetList
        assetsData={assetsData}
        currAsset={currAsset}
        setCurrAsset={setCurrAsset}
      />
    </div>
  );
};

export default AssetsPage;
