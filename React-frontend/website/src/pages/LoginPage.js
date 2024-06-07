import NavbarSell from "../components/NavbarSell/Navbarsell";
import Header from "../components/Header/Header"
import LoginCard from "../components/LoginCard/LoginCard";

function LoginPage() {
    document.title = "DropShip";
    return (
      
      <div className="LoginPage">
        <NavbarSell/>
        <Header/>
        <LoginCard/>
        
        

      </div>
    );
  }
  
  export default LoginPage;