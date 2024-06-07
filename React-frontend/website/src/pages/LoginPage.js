import NavbarSell from "../components/NavbarSell/Navbarsell";
import Header from "../components/Header/Header"
import LoginCard from "../components/LoginCard/LoginCard";
import Footer from "../components/Footer/Footer";

function LoginPage() {
    document.title = "DropShip";
    return (
      
      <div className="LoginPage">
        <NavbarSell/>
        <Header/>
        <LoginCard/>
        <Footer/>
        
        

      </div>
    );
  }
  
  export default LoginPage;