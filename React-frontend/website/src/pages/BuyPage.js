
import Navbar from '../components/Navbar/Navbar';
import MainPage from '../components/Main/MainPage';
import Header from '../components/Header/Header'
function BuyPage() {
  document.title = "DropShip";
  return (
    
    <div className="BuyPage">
      <Navbar/>
      <Header/>
      <MainPage/>
      
     
    </div>
  );
}

export default BuyPage;