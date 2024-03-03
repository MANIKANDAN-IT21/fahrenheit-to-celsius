import React, { useState } from "react";
import cel from "./assets/cel.png";

const Fahrenheit = () => {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");

  const convertToCelsius = () => {
    // °F to °C conversion formula: (°F - 32) × (5/9)
    setCelsius((fahrenheit - 32) * (5 / 9));
  };

  return (
    <div className="py-10 flex-col flex md:flex-row justify-around outline font-txt">
      <img src={cel} style={{ width: "300px" }} alt="mani" />
      <div className="flex-col py-10">
        <h1>
          <span className="text-white text-3xl">C</span>elsius{" "}
          <span className="text-white text-3xl">C</span>onversion
        </h1>
        <h1 className="py-2">Fahrenheit</h1>
        <input
          className="input-box py-2"
          type="number"
          placeholder="Enter Fahrenheit"
          value={fahrenheit}
          onChange={(e) => setFahrenheit(e.target.value)}
        />
        <h1 className="py-2">Celsius</h1>
        <input
          className="input-box py-2"
          type="text"
          placeholder="Celsius"
          value={celsius}
          readOnly
        />
        <br></br>
        <button className="btn py-10" onClick={convertToCelsius}>
          Convert to Celsius
        </button>
      </div>
    </div>
  );
};

export default Fahrenheit;
