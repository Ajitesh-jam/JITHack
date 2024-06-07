import logo from './logo.svg';
import './App.css';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage'
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  document.title = "DropShip";
  return (


    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BuyPage />} />
          <Route path="/about" element={<SellPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
