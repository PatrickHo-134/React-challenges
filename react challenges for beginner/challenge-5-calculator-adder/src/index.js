import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState(0);

  const handleFirstChange = event => setFirst(event.target.value);
  const handleSecondChange = event => setSecond(event.target.value);

  const handleClick = () => {
    setResult(Number(first) + Number(second));
  };

  // const displayedNum = Number(first) + Number(second);
  // console.log(displayedNum);

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          placeholder="0"
          value={first}
          onChange={handleFirstChange}
        />
        <input
          type="number"
          placeholder="0"
          value={second}
          onChange={handleSecondChange}
        />
      </div>

      <button onClick={handleClick}>Add Them!</button>

      <h2>{result}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
