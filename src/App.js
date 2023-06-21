import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://willowy-centaur-da4a04.netlify.app/">
            Claire Pasquiou
          </a>{" "}
          and is
          <a
            rel="noreferrer"
            href="https://github.com/ClairePasquiou/react-weather-app-final"
            target="_blank">
            {" "}
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
