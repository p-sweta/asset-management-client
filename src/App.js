import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AssetsPage from "./pages/AssetsPage/AssetsPage";

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/assets" element={<AssetsPage />} />
          <Route path="/assets/:id" element={<AssetsPage />} />
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
