import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/Main/MainPage";
import Web3ConnectionExample from "./utils/web";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellPage from "./pages/SellPage";
import BuyPage from "./pages/BuyPage";
import LoginPage from "./pages/LoginPage";
function App() {
  document.title = "DropShip";
  return (
    <div className="App">
      {/* <Navbar />
      <MainPage username="JIT" /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/:username/Buy" element={<BuyPage />} />
          <Route path="/:username/Sell" element={<SellPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
