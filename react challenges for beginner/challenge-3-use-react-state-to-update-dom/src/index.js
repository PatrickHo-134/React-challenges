import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

function App() {
  // MOST OF YOUR CODE GOES HERE
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = e => setName(e.target.value);
  const handleAgeChange = e => setAge(e.target.value);

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      {/* Display Data */}
      <div className="input-display">
        <p>Display Name: {name}</p>
        <p>Display Age: {age}</p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label className="label">
            Name:
            <input
              className="input"
              type="text"
              placeholder="Annie"
              value={name}
              onChange={handleNameChange}
            />
          </label>
        </div>

        {/* Input age */}
        <div className="field">
          <label className="label">
            Age:
            <input
              className="input"
              type="number"
              placeholder="38"
              value={age}
              onChange={handleAgeChange}
            />
          </label>
        </div>
      </div>
      <ScotchInfoBar seriesNumber="3" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
