import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuthorization } from "../../utils";
import Dashboard from "../../components/DashBoard/Dashboard";
import "./DashboardPage.scss";

const DashboardPage = () => {
  const api_url = "http://localhost:8080";
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }
    axios
      .get(`${api_url}/users/current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        setFailedAuth(true);
      });
  }, []);

  if (failedAuth) {
    return (
      <main className="dashboard">
        <p>You must be logged in to see this page.</p>
        <p>
          <Link to="/">Log in</Link>
        </p>
      </main>
    );
  }

  if (user === null) {
    return (
      <main className="dashboard">
        <p>Loading...</p>
      </main>
    );
  }

  return <Dashboard />;
};

export default DashboardPage;
