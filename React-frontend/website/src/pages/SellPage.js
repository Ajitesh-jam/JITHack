

// import Navbar from '../components/Navbar/Navbar';
// import MainPage from '../components/Main/MainPage';
import HeaderSell from '../components/HeaderSell/HeaderSell'
import MainSell from '../components/MainSell/MainSell';
import NavbarSell from '../components/NavbarSell/Navbarsell';
function SellPage() {
  document.title = "DropShip";
  return (
    
    <div className="SellPage">
      <NavbarSell/>
      <HeaderSell/>
      <MainSell/>
      
      
      
    </div>
  );
}

export default SellPage;