import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/Main/MainPage";
import Web3ConnectionExample from "./utils/web";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Web3ConnectionExample />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       */}
    </div>
  );
}

export default App;
