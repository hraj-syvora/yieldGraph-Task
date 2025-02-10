import { useState } from "react";
import { barGraphData1mo, lineGraphData1mo } from "../fake-data/fake-data-1mo";
import { barGraphData3mo, lineGraphData3mo } from "../fake-data/fake-data-3mo";
import { barGraphData6mo, lineGraphData6mo } from "../fake-data/fake-data-6mo";
import { barGraphData9mo, lineGraphData9mo } from "../fake-data/fake-data-9mo";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";

const CheckBox = () => {
  const [time, setTime] = useState("1mo");

  const handleChange = (e) => {
    const { name } = e.target;
    setTime(name);
  };
  const getData = () => {
    switch (time) {
      case "1mo":
        return {
          lineGraphData: lineGraphData1mo,
          barGraphData: barGraphData1mo,
        };
      case "3mo":
        return {
          lineGraphData: lineGraphData3mo,
          barGraphData: barGraphData3mo,
        };
      case "6mo":
        return {
          lineGraphData: lineGraphData6mo,
          barGraphData: barGraphData6mo,
        };
      case "9mo":
        return {
          lineGraphData: lineGraphData9mo,
          barGraphData: barGraphData9mo,
        };
      default:
        return {
          lineGraphData: lineGraphData1mo,
          barGraphData: barGraphData1mo,
        };
    }
  };
  const { lineGraphData, barGraphData } = getData();
  const data = ["1mo", "3mo", "6mo", "9mo"];
  return (
    <>
      <div className="flex gap-6 p-2 shadow-md rounded-lg">
        <h1 className="text-3xl text-gray-300 transition duration-300 hover:text-blue-500">
          Historical Chart
        </h1>
        <h1 className="text-3xl text-gray-300 transition duration-300 hover:text-blue-500">
          Yield Curve
        </h1>
      </div>

      <div className="my-2" style={{ display: "flex", gap: "10px" }}>
        {data.map((val) => (
          <label key={val} className="mx-2">
            <input
              className="mx-1"
              type="radio"
              name={val}
              checked={time === val}
              onChange={handleChange}
            />
            {val}
          </label>
        ))}
      </div>
      <div style={{ position: "relative", width: "800px", height: "450px" }}>
        <LineGraph lineGraphData={lineGraphData} />
      </div>
      <div style={{ position: "relative", width: "600px", height: "200px" }}>
        <BarGraph barGraphData={barGraphData} />
      </div>
    </>
  );
};

export default CheckBox;
