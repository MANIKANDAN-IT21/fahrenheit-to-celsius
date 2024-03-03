import "./App.css";
import feh from "./assets/fah.png";
import React, { useState } from "react";

function App() {
  const [celsius, setCelsius] = useState(null);
  const [fahrenheit, setFahrenheit] = useState(null);

  const convertToFahrenheit = () => {
    // °C to °F conversion formula: °C × (9/5) + 32
    setFahrenheit(celsius * (9 / 5) + 32);
  };

  return (
    <div className="py-10 flex-col flex md:flex-row justify-around outline font-txt">
      <div className="flex flex-col ">
        <h1>
          <span className="text-white text-3xl">F</span>ahrenheit{" "}
          <span className="text-white text-3xl">C</span>onversion
        </h1>
        <h1 className="py-2">Celsius</h1>
        <input
          className="input-box py-2"
          type="number"
          placeholder="Enter the Celsius"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
        <h1 className="py-2">Fahrenheit</h1>
        <input
          className="input-box"
          type="number"
          placeholder=" the Fahrenheit"
          value={fahrenheit}
          readOnly
        />

        <button onClick={convertToFahrenheit} className="btn py-10">
          Convert to Fahrenheit
        </button>
      </div>

      <img src={feh} style={{ width: "300px" }} alt="mani" />
    </div>
  );
}

export default App;
