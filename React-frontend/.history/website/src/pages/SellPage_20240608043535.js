// import Navbar from '../components/Navbar/Navbar';
// import MainPage from '../components/Main/MainPage';
import Footer from "../components/Footer/Footer";
import HeaderSell from "../components/HeaderSell/HeaderSell";
import MainSell from "../components/MainSell/MainSell";
import NavbarSell from "../components/NavbarSell/Navbarsell";
import { useParams } from "react-router-dom";
function SellPage() {
  document.title = "DropShip";
  const { username } = useParams();
  return (
    <div className="SellPage">
      <NavbarSell />
      <HeaderSell />
      <MainSell />
      <Footer />
    </div>
  );
}

export default SellPage;
