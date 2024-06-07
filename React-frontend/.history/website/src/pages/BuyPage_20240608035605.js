import Navbar from "../components/Navbar/Navbar";
import MainPage from "../components/Main/MainPage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function BuyPage() {
  document.title = "DropShip";
  return (
    <div className="BuyPage">
      <Navbar />
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default BuyPage;
