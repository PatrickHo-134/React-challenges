import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  // set the initial value of the offset from the original position of the box vertically
  const [offsetTop, setOffsetTop] = useState(300);

  // create a function to reduce the value of offsetTop
  function moveBoxUp() {
    setOffsetTop(offsetTop - 50);
  }

  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={moveBoxUp}>👆 Move Up 👆</button>

      {/* Add an in-line style with a transformation property 
      and its value which uses the translateY function 
      to displace the box from the top */}
      {/* move this box using inline styles */}
      <div
        className="box"
        style={{ transform: `translateY(${offsetTop}px)` }}
      />

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
