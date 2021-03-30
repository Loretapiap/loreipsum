import happyhacking from "./assets/happy-hacking.png";
import success from "./assets/success.png";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <span className="highlight">Lorena Tapia</span> entregable 1
        </p>
        <p>
          <code>mar 27, 2021</code>
        </p>
      </header>
      <body className="flex">
        <div className="base-50">
          <div className="window">
            <div className="icons">
              <span></span>
            </div>
          </div>
          <div className="content">
            <img src={happyhacking} className="screen-1" alt="logo" />
          </div>
        </div>
        <div className="base-50">
          <div className="window">
            <div className="icons">
              <span></span>
            </div>
          </div>
          <div className="content">
            <img src={success} className="screen-1" alt="logo" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
