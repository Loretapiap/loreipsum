import happyhacking from "./assets/happy-hacking.png";
import success from "./assets/success.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <span class="highlight">Lorena Tapia</span> entregable 1
        </p>
        <p>
          <code>mar 27, 2021</code>
        </p>
      </header>
      <body class="flex">
        <div class="base-50">
          <div class="window">
            <div class="icons">
              <span></span>
            </div>
          </div>
          <div class="content">
            <img src={happyhacking} className="screen-1" alt="logo" />
          </div>
        </div>
        <div class="base-50">
          <div class="window">
            <div class="icons">
              <span></span>
            </div>
          </div>
          <div class="content">
            <img src={success} className="screen-1" alt="logo" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
