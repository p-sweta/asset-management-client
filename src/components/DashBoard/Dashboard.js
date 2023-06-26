import { Link } from "react-router-dom";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Link to={"/assets"} className="dashboard__link" >
        <div className="dashboard__card-container">
          <div className="dashboard__card-content">
            <p className="dashboard__card-text">AMS</p>
            <p>(Asset Management System)</p>
          </div>
          <div className="dashboard__card-shadow"></div>
        </div>
      </Link>
      <div className="dashboard__card-container">
        <div className="dashboard__card-content">
          <p className="dashboard__card-text">Location</p>
        </div>
        <div className="dashboard__card-shadow"></div>
      </div>
      <div className="dashboard__card-container">
        <div className="dashboard__card-content">
          <p className="dashboard__card-text">Equipment Performance</p>
        </div>
        <div className="dashboard__card-shadow"></div>
      </div>
      <div className="dashboard__card-container">
        <div className="dashboard__card-content">
          <p className="dashboard__card-text">Maintenance</p>
        </div>
        <div className="dashboard__card-shadow"></div>
      </div>
      <div className="dashboard__card-container">
        <div className="dashboard__card-content">
          <p className="dashboard__card-text">Technician</p>
        </div>
        <div className="dashboard__card-shadow"></div>
      </div>
      <div className="dashboard__card-container">
        <div className="dashboard__card-content">
          <p className="dashboard__card-text">Staff Search</p>
        </div>
        <div className="dashboard__card-shadow"></div>
      </div>
    </div>
  );
};

export default Dashboard;
