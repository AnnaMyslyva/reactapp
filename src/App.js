import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>Weahter App</p>
          <Weather city="Oslo" />
        </p>
      </header>
    </div>
  );
}

export default App;
