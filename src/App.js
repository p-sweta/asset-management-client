import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AssetsPage from "./pages/AssetsPage/AssetsPage";
import UpdateAssetPage from "./pages/UpdateAssetPage/UpdateAssetPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import AddAssetPage from "./pages/AddAssetPage/AddAssetPage";
import Dashboard from "./pages/Dashboard/Dashboard";

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assets" element={<AssetsPage />} />
          <Route path="/assets/:id" element={<AssetsPage />} />
          <Route path="/assets/edit/:id" element={<UpdateAssetPage />} />
          <Route path="/assets/add" element={<AddAssetPage />} />
          {/* <Route path="/locations" element={} />
          <Route path="/locations/:id" element={} />
          <Route path="/technicians" element={} />
          <Route path="/technicians/:id" element={} />
          <Route path="/maintenance-tasks" element={} />
          <Route path="/maintenance-tasks/:id" element={} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
