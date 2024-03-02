import React, { useState } from "react";

const Fahrenheit = () => {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");

  const convertToCelsius = () => {
    // °F to °C conversion formula: (°F - 32) × (5/9)
    setCelsius((fahrenheit - 32) * (5 / 9));
  };
 
  return (
    <div className="flex">
      <h1>Fahrenheit</h1>
      <input
        type="number"
        placeholder="Enter Fahrenheit"
        value={fahrenheit}
        onChange={(e) => setFahrenheit(e.target.value)}
      />
      <h1>Celsius</h1>
      <input type="text" placeholder="Celsius" value={celsius} readOnly />
      <button onClick={convertToCelsius}>Convert to Celsius</button>
    </div>
  );
};

export default Fahrenheit;
