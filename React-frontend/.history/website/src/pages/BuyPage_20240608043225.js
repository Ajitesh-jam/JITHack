import Navbar from "../components/Navbar/Navbar";
import MainPage from "../components/Main/MainPage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";

function BuyPage() {
  document.title = "DropShip";
  const {username}=useParams();

  return (
    <div className="BuyPage">
      <Navbar />
      <Header />
      <MainPage username= />
      <Footer />
    </div>
  );
}

export default BuyPage;
