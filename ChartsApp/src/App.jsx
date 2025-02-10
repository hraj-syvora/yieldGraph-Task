import "./App.css";
import BarGraph from "./components/BarGraph";
import LineGraph from "./components/LineGraph";
import CheckBox from "./components/CheckBox";

function App() {
  return (
      <div>
        <CheckBox />
        <LineGraph />
        <BarGraph />
      </div>
  );
}

export default App;
